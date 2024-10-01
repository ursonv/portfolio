<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cyclists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('team_id');
            $table->string('slug');
            $table->string('name');
            $table->string('nationality');
            $table->text('description');
            $table->string('img');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cyclists');
    }
};
