# OAuth2 Proxy with Nginx

## Overview

This repository provides a complete setup for integrating OAuth2 proxy with Nginx to secure web applications and services using OAuth 2.0 authentication.

## Features

- Secure authentication using OAuth2
- Nginx reverse proxy configuration
- Support for multiple OAuth providers
- Easy configuration and deployment

## Prerequisites

- Docker
- Docker Compose
- OAuth2 provider credentials (Google, GitHub, etc.)

## Configuration

### Environment Variables

Configure the following environment variables in `.env`:

- `OAUTH2_PROXY_CLIENT_ID`: OAuth provider client ID
- `OAUTH2_PROXY_CLIENT_SECRET`: OAuth provider client secret
- `OAUTH2_PROXY_COOKIE_SECRET`: Random secret for cookie encryption
- `OAUTH2_PROVIDER`: Authentication provider (google, github, etc.)

### Supported Providers

- Google
- GitHub
- Azure AD
- Custom OpenID Connect providers

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tharinduRE/oauth2-proxy-nginx.git
   cd oauth2-proxy-nginx
   ```

2. Create `.env` file with your configuration

3. Start the services:
   ```bash
   docker-compose up -d
   ```

## Usage

Access your secured application through `https://yourdomain.com`

## Security Considerations

- Always use HTTPS
- Rotate OAuth tokens and secrets regularly
- Limit access using email domains or specific users

## Troubleshooting

- Check Docker logs: `docker-compose logs`
- Verify environment variables
- Ensure correct OAuth provider configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and create a Pull Request

## License

[Specify License - e.g., MIT]

## Contact

[Maintainer Contact Information]
