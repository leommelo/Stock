using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace StockAPI.Models
{
    public class Produto
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string Nome { get; set; } = null!;

        [Column(TypeName = "varchar(100)")]
        public string Categoria { get; set; } = null!;

        public int Quantidade { get; set; }

        public decimal PrecoUnitario { get; set; }
    }

}