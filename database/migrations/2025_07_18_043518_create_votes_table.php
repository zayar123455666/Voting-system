<?php

use App\Models\candidates;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Can;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('votes', function (Blueprint $table) {
              $table->id();
$table->foreignId('user_id')->constrained()->cascadeOnDelete();
$table->foreignId('king_candidate_id')->nullable()->constrained('candidates')->nullOnDelete();
$table->foreignId('queen_candidate_id')->nullable()->constrained('candidates')->nullOnDelete();
$table->timestamps();

$table->unique('user_id'); // so a user can only vote once

           

          
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('votes');
    }
};
