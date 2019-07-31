

## Installation

- `composer install` - this will install necessary packages
- Copy `.env.example` to `.env`
- Modify database config in `.env`

        `DB_DATABASE=flickr_management`
        `DB_USERNAME=mysql_user`
        `DB_PASSWORD=password`
        
- Create a database in your MySql (Should match the database name inside your .env)
- Run `php artisan key:generate`
- Run `php artisan migrate`
- Run `php artisan db:seed`
- Run `php artisan serve`
- Open your browser and go to `http://localhost:8000`
