let model;

async function loadModel() {
  model = await fetch("knowledge/impact-file.json").then(res => res.json());
}

function calculateImpact(buildings) {
  if (!model) throw new Error("Model not loaded");

  // Temperature (exponential decay)
  const temp =
    model.temperature_reduction.base_value *
    (1 - Math.exp(-model.temperature_reduction.rate * buildings));

  // Carbon (linear)
  const carbon =
    buildings * model.carbon_absorption.per_building;

  // Green cover (capped linear)
  const green =
    Math.min(
      model.green_cover.max,
      model.green_cover.per_building * buildings
    );

  // Livability (composite score)
  const livabilityRaw =
    model.livability_score.base +
    buildings * model.livability_score.weights.buildings +
    green * model.livability_score.weights.green_cover +
    temp * model.livability_score.weights.temperature_reduction;

  const livability = Math.max(
    model.livability_score.clamp[0],
    Math.min(model.livability_score.clamp[1], livabilityRaw)
  );

  return {
    temperature_reduction: temp,
    carbon_absorption: carbon,
    green_cover: green,
    livability_score: livability
  };
}