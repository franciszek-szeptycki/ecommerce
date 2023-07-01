FROM python:3.9

WORKDIR /core

RUN apt-get update && apt-get install -y postgresql-client


COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

RUN chmod +x ./wait-for-postgres.sh
RUN chmod +x ./run-server.sh

CMD ["./wait-for-postgres.sh", "./run-server.sh"]
