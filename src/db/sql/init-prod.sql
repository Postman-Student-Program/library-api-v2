CREATE USER librarian;
ALTER USER librarian SUPERUSER;

-- Create test DB
DROP DATABASE IF EXISTS library_api_prod;
CREATE DATABASE library_api_prod;
\c library_api_prod;
-- Need this extension to use uuid_generate_v4() function in db
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER DATABASE library_api_prod OWNER TO librarian;
GRANT ALL PRIVILEGES ON DATABASE library_api_prod TO librarian;
