namespace RecipeNg.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class Recipe
    {
        public Recipe()
        {
            RecipeIngredients = new HashSet<RecipeIngredient>();
            RecipeInstructions = new HashSet<RecipeInstruction>();
        }

        public int RecipeID { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        public decimal? Price { get; set; }

        public int? Time { get; set; }

        [StringLength(50)]
        public string Image { get; set; }

        public virtual ICollection<RecipeIngredient> RecipeIngredients { get; set; }

        public virtual ICollection<RecipeInstruction> RecipeInstructions { get; set; }
    }
}
