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
        Schema::table('courses', function (Blueprint $table) {
            $table->json('tags')->nullable()->after('price');
            $table->json('prerequisites')->nullable()->after('tags');
            $table->string('effort')->nullable()->after('prerequisites');
            $table->timestamp('published_at')->nullable()->after('effort');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn(['tags', 'prerequisites', 'effort', 'published_at']);
        });
    }
};