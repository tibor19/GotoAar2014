namespace RecipeNg.Models
{
    using System.ComponentModel.DataAnnotations;

    public partial class RecipeInstruction
    {
        public int RecipeInstructionID { get; set; }

        public int RecipeID { get; set; }

        [StringLength(250)]
        public string InstructionText { get; set; }

        public virtual Recipe Recipe { get; set; }
    }
}
