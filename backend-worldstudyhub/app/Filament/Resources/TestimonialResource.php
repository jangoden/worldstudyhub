<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialResource\Pages;
use App\Filament\Resources\TestimonialResource\RelationManagers;
use App\Models\Testimonial;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TestimonialResource extends Resource
{
    protected static ?string $model = Testimonial::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $navigationGroup = 'Content Management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('user_name')
                    ->label('Name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('user_title')
                    ->label('Designation')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('user_avatar_url')
                    ->label('User Avatar')
                    ->image()
                    ->directory('testimonial-avatars')
                    ->disk('public'),
                Forms\Components\Select::make('star')
                    ->label('Star Rating')
                    ->options([
                        '1' => '1 Star',
                        '2' => '2 Stars',
                        '3' => '3 Stars',
                        '4' => '4 Stars',
                        '5' => '5 Stars',
                    ])
                    ->required()
                    ->default('5'),
                Forms\Components\Textarea::make('quote')
                    ->label('Content')
                    ->required()
                    ->maxLength(65535)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('user_avatar_url')
                    ->label('Avatar')
                    ->circular(),
                Tables\Columns\TextColumn::make('user_name')
                    ->label('Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('user_title')
                    ->label('Designation')
                    ->searchable(),
                Tables\Columns\TextColumn::make('star')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        '1' => 'danger',
                        '2' => 'warning',
                        '3' => 'info',
                        '4' => 'success',
                        '5' => 'success',
                        default => 'gray',
                    })
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTestimonials::route('/'),
            'create' => Pages\CreateTestimonial::route('/create'),
            'edit' => Pages\EditTestimonial::route('/{record}/edit'),
        ];
    }
}
