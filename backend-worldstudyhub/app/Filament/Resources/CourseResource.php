<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseResource\Pages;
use App\Filament\Resources\CourseResource\RelationManagers;
use App\Models\Course;
use Filament\Forms;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class CourseResource extends Resource
{
    protected static ?string $model = Course::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    protected static ?string $navigationGroup = 'Course Management';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Course Details')
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null),

                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->disabled()
                            ->dehydrated()
                            ->unique(Course::class, 'slug', ignoreRecord: true),

                        RichEditor::make('description')
                            ->required()
                            ->label('Paragraph/Description')
                            ->columnSpanFull(),

                        FileUpload::make('image_url')
                            ->label('Course Image')
                            ->image()
                            ->directory('course-images')
                            ->disk('public'),
                    ])->columns(2),

                Section::make('Metadata')
                    ->schema([
                        Select::make('category_id')
                            ->relationship('category', 'name')
                            ->required()
                            ->searchable()
                            ->preload(),

                        Select::make('instructor_id')
                            ->relationship('instructor', 'name')
                            ->required()
                            ->searchable()
                            ->preload(),

                        DateTimePicker::make('published_at')
                            ->label('Publish Date')
                            ->nullable(),

                        TagsInput::make('tags')
                            ->required(),

                        TagsInput::make('prerequisites')
                            ->required(),
                    ])->columns(2),


                Section::make('Pricing & Duration')
                    ->schema([
                        TextInput::make('price')
                            ->numeric()
                            ->required()
                            ->prefix('Rp'),

                        TextInput::make('duration')
                            ->required()
                            ->maxLength(255)
                            ->helperText('e.g., 8h 15m'),

                        TextInput::make('effort')
                            ->required()
                            ->maxLength(255)
                            ->helperText('e.g., 4-6 hours/week'),
                    ])->columns(3),


                Section::make('Attributes')
                    ->schema([
                        Select::make('difficulty')
                            ->options([
                                'Beginner' => 'Beginner',
                                'Intermediate' => 'Intermediate',
                                'Advanced' => 'Advanced',
                            ])
                            ->required(),

                        Select::make('language')
                            ->options([
                                'English' => 'English',
                                'Spanish' => 'Spanish',
                                'French' => 'French',
                                'Indonesian' => 'Indonesian',
                            ])
                            ->required(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image_url')
                    ->label('Image')
                    ->square(),
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('category.name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('instructor.name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('price')
                    ->money('IDR')
                    ->sortable(),
                TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('category', 'name'),
                Tables\Filters\SelectFilter::make('instructor')
                    ->relationship('instructor', 'name'),
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
            RelationManagers\LessonsRelationManager::class,
            RelationManagers\ReviewsRelationManager::class,
            RelationManagers\EnrollmentsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCourses::route('/'),
            'create' => Pages\CreateCourse::route('/create'),
            'edit' => Pages\EditCourse::route('/{record}/edit'),
        ];
    }
}
