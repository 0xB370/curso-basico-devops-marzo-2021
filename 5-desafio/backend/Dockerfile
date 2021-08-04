FROM python:3.7-slim-buster

# Setting Environment Variables
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY 53cR37

# Setting up Working Directory
WORKDIR /app

# Copy Everything to Docker Environment
COPY . .

# Dependencies Instalation
RUN apt update && apt install -y gcc graphviz-dev
RUN pip install -r requirements.txt
RUN apt autoremove -y gcc graphviz-dev && apt autoclean -y

EXPOSE 8000

# Run App
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]