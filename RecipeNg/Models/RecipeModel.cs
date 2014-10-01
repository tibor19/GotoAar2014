namespace RecipeNg.Models
{
    using System.Data.Entity;

    public partial class RecipeModel : DbContext
    {
        public RecipeModel()
            : base("name=RecipeModel")
        {
        }

        public virtual DbSet<Ingredient> Ingredients { get; set; }
        public virtual DbSet<RecipeIngredient> RecipeIngredients { get; set; }
        public virtual DbSet<RecipeInstruction> RecipeInstructions { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ingredient>()
                .HasMany(e => e.RecipeIngredients)
                .WithRequired(e => e.Ingredient)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RecipeIngredient>()
                .Property(e => e.Amount)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Recipe>()
                .Property(e => e.Price)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Recipe>()
                .HasMany(e => e.RecipeIngredients)
                .WithRequired(e => e.Recipe)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Recipe>()
                .HasMany(e => e.RecipeInstructions)
                .WithRequired(e => e.Recipe)
                .WillCascadeOnDelete(false);
        }
    }
}
