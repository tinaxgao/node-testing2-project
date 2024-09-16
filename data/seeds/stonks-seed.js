exports.seed = async function (knex) {
  await knex("stocks").truncate();
  await knex("stocks").insert([
    { ticker: "PFE", upper: 90, lower: 80 },
    { ticker: "VE", upper: 70, lower: 60 },
    { ticker: "NVDA", upper: 50, lower: 40 },
  ]);
};
