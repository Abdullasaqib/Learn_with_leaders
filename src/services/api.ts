import { supabase } from '../lib/supabase';
import { Program, Application, Achievement, Profile } from '../../types';

/**
 * Service Layer - Acts as a centralized "RestAPI" interface for the frontend.
 * All database interactions go through this "Monolith" object.
 */
export const api = {
    // Profiles
    profiles: {
        get: async (userId: string) => {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) throw new Error(`Profile fetch error: ${error.message}`);
            return data as Profile;
        },

        update: async (userId: string, updates: Partial<Profile>) => {
            const { data, error } = await supabase
                .from('profiles')
                .update(updates)
                .eq('id', userId)
                .select()
                .single();

            if (error) throw new Error(`Profile update error: ${error.message}`);
            return data as Profile;
        }
    },

    // Programs
    programs: {
        list: async () => {
            const { data, error } = await supabase
                .from('programs')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw new Error(`Programs list error: ${error.message}`);
            return data as Program[];
        },

        getById: async (programId: string) => {
            const { data, error } = await supabase
                .from('programs')
                .select('*')
                .eq('id', programId)
                .single();

            if (error) throw new Error(`Program fetch error: ${error.message}`);
            return data as Program;
        }
    },

    // Applications
    applications: {
        listByUser: async (userId: string) => {
            const { data, error } = await supabase
                .from('applications')
                .select('*, program:programs(*)')
                .eq('user_id', userId);

            if (error) throw new Error(`Applications list error: ${error.message}`);
            return data as (Application & { program: Program })[];
        },

        create: async (userId: string, programId: string) => {
            const { data, error } = await supabase
                .from('applications')
                .insert({ user_id: userId, program_id: programId, status: 'applied' })
                .select()
                .single();

            if (error) throw new Error(`Application creation error: ${error.message}`);
            return data as Application;
        }
    },

    // Achievements
    achievements: {
        listByUser: async (userId: string) => {
            const { data, error } = await supabase
                .from('achievements')
                .select('*')
                .eq('user_id', userId);

            if (error) throw new Error(`Achievements list error: ${error.message}`);
            return data as Achievement[];
        }
    }
};
