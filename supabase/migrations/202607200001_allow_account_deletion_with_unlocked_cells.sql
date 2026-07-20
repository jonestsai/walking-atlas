-- Deleting auth.users cascades to profiles, walk sessions, and unlocked cells.
-- A restrictive session reference can block that cascade when a user has tiles,
-- preventing the account-deletion endpoint from completing.
alter table public.user_h3_cells
  drop constraint if exists user_h3_cells_first_walk_session_id_fkey;

alter table public.user_h3_cells
  add constraint user_h3_cells_first_walk_session_id_fkey
  foreign key (first_walk_session_id)
  references public.walk_sessions (id)
  on delete cascade;
