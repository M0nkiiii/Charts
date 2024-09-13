# Charts

# Web Application Dashboard

## Overview

This project is a web application built with Next.js on the frontend and Django on the backend. It features a dashboard with various charts (Candlestick, Line, Bar, and Pie) that are populated with data retrieved from the Django API backend.



## Getting Started

To set up and run this application locally, follow these steps:

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **Python**: Ensure you have Python installed. You can download it from [python.org](https://www.python.org/).
3. **Pip**: Ensure you have pip installed for Python package management.

## Project Structure

- **frontend/**: Contains the Next.js frontend application.
- **backend/**: Contains the Django backend API.

## Setting Up the Backend

1. **Navigate to the backend directory**:

```bash
cd chart_backend
```
 
2. **Install the required dependencies:**

```bash
pip install -r requirements.txt
```

3. **Apply migrations and start the Django server:**

```bash
python manage.py migrate
python manage.py runserver
```
The Django server will run on `http://localhost:8000`.

## Setting Up the Frontend

1. **Navigate to the frontend directory:**

```
cd frontend
```

2. **Install the required dependencies**:

``` bash
npm install
```

3. **Start the Next.js development server**:

``` bash
npm run dev
```
The Next.js server will run on `http://localhost:3000`.

## Libraries and Tools Used

- **Frontend**:
    
    - Next.js
    - React
    - Chart.js
    - Recharts (for Candlestick Chart)
- **Backend**:
    
    - Django
    - Django REST Framework


## Approach and Thought Process

The application consists of a frontend built with Next.js that fetches data from a Django backend API. The Django API provides data for four types of charts: Candlestick, Line Chart, Bar Chart, and Pie Chart. The frontend displays these charts using Chart.js and Recharts.

The backend serves hardcoded data for the charts via different endpoints. The frontend fetches this data and renders the charts dynamically. The use of React hooks (`useState` and `useEffect`) ensures that data fetching and state management are handled efficiently.
