using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

List<string> products = await GetProductsAsync();

List<string> longNames = products
    .Where(product => product.Length > 3)
    .ToList();

foreach (string product in longNames)
{
    Console.WriteLine(product);
}

static async Task<List<string>> GetProductsAsync()
{
    await Task.Delay(500);

    return new List<string> { "Bút", "Vở", "Thước", "Bánh mì" };
}
