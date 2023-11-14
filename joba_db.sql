--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Ubuntu 16.1-1.pgdg23.04+1)
-- Dumped by pg_dump version 16.1 (Ubuntu 16.1-1.pgdg23.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    u_id character varying(16)[] NOT NULL,
    fullname character varying(100)[],
    email character varying(100)[],
    pass character varying(100)[],
    address character varying(191)[],
    number_phone character(17)[],
    image_profile character varying(191)[],
    description character(1)[]
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (u_id, fullname, email, pass, address, number_phone, image_profile, description) FROM stdin;
\.


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (u_id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Ubuntu 16.1-1.pgdg23.04+1)
-- Dumped by pg_dump version 16.1 (Ubuntu 16.1-1.pgdg23.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post (
    id_post character varying(32)[] NOT NULL,
    title character(48)[],
    tag_id character varying[],
    body text[],
    user_id character varying(16)[],
    slug text[],
    create_at timestamp without time zone,
    update_at timestamp without time zone,
    location character varying(255)[]
);


ALTER TABLE public.post OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    u_id character varying(16)[] NOT NULL,
    fullname character varying(100)[],
    email character varying(100)[],
    pass character varying(100)[],
    address character varying(191)[],
    number_phone character(17)[],
    image_profile character varying(191)[],
    description character(1)[]
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post (id_post, title, tag_id, body, user_id, slug, create_at, update_at, location) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (u_id, fullname, email, pass, address, number_phone, image_profile, description) FROM stdin;
\.


--
-- Name: post post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id_post);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (u_id);


--
-- PostgreSQL database dump complete
--

