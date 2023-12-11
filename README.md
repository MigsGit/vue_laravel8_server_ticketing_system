# Vue 3

```sh
    # Clone the project
    git clone https://github.com/MigsGit/vue_laravel8_server_ticketing_system.git

    # Copy env file and add your own database and mail credentials
    cp .env.example .env

    # Install dependency
    composer install
    composer update

    # Generate app key
    php artisan key:generate
    
    # Migrate database
    php artisan migrate:fresh --seed

    # Install dependency with NPM
    npm install --legacy-peer-deps

    # Develop
    npm run watch # or npm run dev

    # Build on production
    npm run production

   ```
## Built With

* [Laravel 8](https://laravel.com)
* [Vue.js](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
