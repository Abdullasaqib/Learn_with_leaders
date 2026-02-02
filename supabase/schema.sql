-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES (Extends auth.users)
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  role text default 'student' check (role in ('student', 'admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- PROGRAMS
create table public.programs (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  university text not null,
  description text,
  tags text[] default '{}',
  badges text[] default '{}',
  date_text text, -- Display text like "Jun 15, 2024"
  start_date timestamp with time zone,
  seats_text text,
  seats_available integer,
  rating numeric(3, 1),
  students_count_text text,
  price_text text,
  price_value numeric,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indices for scalability
create index programs_tags_idx on public.programs using gin (tags);
create index programs_university_idx on public.programs (university);
create index programs_start_date_idx on public.programs (start_date);

alter table public.programs enable row level security;

create policy "Programs are viewable by everyone."
  on public.programs for select
  using ( true );

-- APPLICATIONS
create table public.applications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  program_id uuid references public.programs(id) not null,
  status text default 'applied' check (status in ('applied', 'interview_scheduled', 'payment_pending', 'enrolled', 'completed', 'no_show')),
  applied_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index applications_user_id_idx on public.applications (user_id);
create index applications_status_idx on public.applications (status);

alter table public.applications enable row level security;

create policy "Users can view own applications."
  on public.applications for select
  using ( auth.uid() = user_id );

create policy "Users can create applications."
  on public.applications for insert
  with check ( auth.uid() = user_id );

-- ACHIEVEMENTS / CERTIFICATES
create table public.achievements (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  title text not null,
  category text check (category in ('Academic', 'Leadership', 'Project', 'Competition', 'Service', 'Certificate')),
  organization text,
  date_earned date,
  description text,
  status text default 'Pending Verification',
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index achievements_user_id_idx on public.achievements (user_id);

alter table public.achievements enable row level security;

create policy "Users can view own achievements."
  on public.achievements for select
  using ( auth.uid() = user_id );

-- Function to handle new user signup
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
