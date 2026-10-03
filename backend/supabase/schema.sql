-- Supabase schema for the online wedding guestbook.
-- Create this table in Supabase SQL Editor, then set the URL + anon key in js/config.js.

create extension if not exists pgcrypto;

create table if not exists public.wedding_wishes (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 80),
  message text not null check (char_length(message) between 1 and 500),
  approved boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.wedding_wishes enable row level security;

create policy "public can read approved wishes"
on public.wedding_wishes
for select
to anon
using (approved = true);

create policy "public can submit wishes"
on public.wedding_wishes
for insert
to anon
with check (approved = true);

create index if not exists wedding_wishes_created_at_idx on public.wedding_wishes (created_at desc);
