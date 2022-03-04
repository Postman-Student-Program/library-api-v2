CREATE USER librarian WITH PASSWORD 'library';
ALTER USER librarian SUPERUSER;

-- Create test DB
DROP DATABASE IF EXISTS library_api_test;
CREATE DATABASE library_api_test;
\c library_api_test;
-- Need this extension to use uuid_generate_v4() function in db
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER DATABASE library_api_test OWNER TO librarian;
GRANT ALL PRIVILEGES ON DATABASE library_api_test TO librarian;

-- Create dev DB
DROP DATABASE IF EXISTS library_api_dev;
CREATE DATABASE library_api_dev;
\c library_api_dev;
-- Need this extension to use uuid_generate_v4() function in db
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
ALTER DATABASE library_api_dev OWNER TO librarian;
GRANT ALL PRIVILEGES ON DATABASE library_api_dev TO librarian;