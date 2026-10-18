# Vehicle Rental System API

A RESTful backend API for managing vehicle rentals, customer accounts, vehicle inventory, and booking operations. The system provides secure authentication and role-based access control for administrators and customers.

## Live Deployment

- **Live API URL:** [Add your deployed API URL here]
- **GitHub Repository:** https://github.com/FerdosFijer/Next_M14_Vehicle-Rental-server-code

## Features

### Authentication and Authorization
- Register new customer accounts.
- Sign in and receive a JWT authentication token.
- Hash passwords securely using bcrypt.
- Protect endpoints using JWT authentication and role-based authorization.

### Vehicle Management
- Add, view, update, and delete vehicles.
- Support car, bike, van, and SUV vehicle types.
- Track vehicle availability.
- Prevent vehicle deletion when active bookings exist.

### User Management
- View all registered users (admin only).
- Update user profiles and authorized user details.
- Delete eligible users (admin only).

### Booking Management
- Create vehicle rental bookings.
- Validate vehicle availability.
- Calculate rental costs based on the daily rent price and rental duration.
- Cancel eligible bookings before their start date.
- Mark returned vehicles as available again.
- Restrict customers to managing their own bookings.

## Technology Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Authentication:** JSON Web Token (JWT)
- **Password Hashing:** bcrypt
- **API Testing:** Postman

## API Endpoints

Base URL: `/api/v1`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/signup` | Register a customer |
| POST | `/auth/signin` | Sign in |
| GET | `/vehicles` | Get all vehicles |
| GET | `/vehicles/:vehicleId` | Get vehicle details |
| POST | `/vehicles` | Add a vehicle (admin) |
| PUT | `/vehicles/:vehicleId` | Update a vehicle (admin) |
| DELETE | `/vehicles/:vehicleId` | Delete a vehicle (admin) |
| GET | `/users` | Get all users (admin) |
| PUT | `/users/:userId` | Update user details |
| DELETE | `/users/:userId` | Delete a user (admin) |
| POST | `/bookings` | Create a booking |
| GET | `/bookings` | Get authorized bookings |
| PUT | `/bookings/:bookingId` | Update booking status |

## Prerequisites

Before running the project, install:

- Node.js and npm
- PostgreSQL
- Git

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the variables required by your application.

Example:

```env
PORT=5000
CONNECTION_STR=your_postgresql_connection_string
JWT_SECRET=your_secure_jwt_secret
```

Use the exact environment variable names expected by your source code. Never commit real passwords, database credentials, or JWT secrets to GitHub.

### 4. Set up the database

Create a PostgreSQL database and ensure that the application's database initialization or migration process has been completed.

### 5. Run the application

Use the development command configured in your `package.json`, for example:

```bash
npm run dev
```

For production, build and start the application using the scripts defined in `package.json`.

## Authentication

Protected endpoints require a valid JWT token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Access is granted according to the authenticated user's role and permissions.

## Testing

Use Postman to test the API endpoints, request bodies, authentication, authorization, and response status codes.

## License

Specify the applicable license if this project is distributed under an open-source license.
