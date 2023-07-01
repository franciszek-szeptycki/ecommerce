#!/bin/bash

# Wait for the PostgreSQL database to be ready
until PGPASSWORD="$PASSWORD" psql -h "$HOST" -U "$USER" -d "$NAME" -c '\q'; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

# Run the provided command (e.g., Gunicorn)

exec "$@"
