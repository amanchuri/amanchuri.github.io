function scorePlant(plant, building, systems, rules, userInput) {

    let score = 75;
    let explanation = [];

    // =========================
    // HARD CONSTRAINTS
    // =========================

    if (
        plant.self_clinging &&
        userInput.material === "Glass"
    ) {
        return {
            plant,
            confidence: 0,
            rejected: true,
            reason: "Self-clinging plants cannot be installed on glass."
        };
    }

    if (
        userInput.system === "Green Roof System" &&
        building.load_capacity_category === "Low"
    ) {
        return {
            plant,
            confidence: 0,
            rejected: true,
            reason: "Building cannot support a green roof."
        };
    }

    // =========================
    // COOLING
    // =========================

    if (building.cooling_priority === "Very High") {

        if (plant.cooling_potential === "High") {
            score += 15;
            explanation.push("Excellent cooling performance");
        } else {
            score += 5;
        }

    }

    // =========================
    // DROUGHT
    // =========================

    if (userInput.climate === "hot-dry") {

        if (
            plant.drought_tolerance === "High" ||
            plant.drought_tolerance === "Very High"
        ) {

            score += 12;
            explanation.push("Excellent drought tolerance");

        } else if (
            plant.drought_tolerance === "Moderate"
        ) {

            score += 4;
            explanation.push("Moderate drought tolerance");

        } else {

            score -= 4;
            explanation.push("Limited drought tolerance");

        }

    }

    // =========================
    // POLLUTION
    // =========================

    if (
        building.building_type === "Parking Garage" ||
        building.building_type === "Industrial Warehouse"
    ) {

        if (plant.pollution_tolerance === "High") {

            score += 8;
            explanation.push("High pollution tolerance");

        }

    }

    // =========================
    // FAST GROWTH
    // =========================

    if (
        userInput.goal === "rapid_greening" &&
        (
            plant.growth_rate === "Fast" ||
            plant.growth_rate === "Very Fast"
        )
    ) {

        score += 8;
        explanation.push("Fast establishment");

    }

    // =========================
    // MATERIAL
    // =========================

    if (
        plant.self_clinging &&
        ["Brick","Concrete","Stone"].includes(userInput.material)
    ) {

        score += 6;
        explanation.push("Compatible with facade material");

    }

    // =========================
    // MAINTENANCE
    // =========================

    if (
        userInput.maintenance &&
        plant.maintenance === userInput.maintenance
    ) {

        score += 6;
        explanation.push("Maintenance preference matched");

    }

    // =========================
    // SUNLIGHT
    // =========================

    if (
        userInput.sunlight &&
        Array.isArray(plant.sunlight) &&
        plant.sunlight.includes(userInput.sunlight)
    ) {

        score += 6;
        explanation.push("Suitable sunlight conditions");

    }

    // =========================
    // INSTALLATION SYSTEM
    // =========================

    if (
        systems.some(system =>
            Array.isArray(system.compatible_plants) &&
            system.compatible_plants.includes(plant.common_name)
        )
    ) {

        score += 8;
        explanation.push("Compatible installation system");

    }

    // =========================
    // FINAL SCORE
    // =========================

    score = Math.round(score);

    if (score < 60) {

        return {
            plant,
            confidence: score,
            rejected: true,
            reason: "Compatibility below recommendation threshold."
        };

    }

    if (score > 98)
        score = 98;

    return {

        plant,

        confidence: score,

        explanation

    };

}