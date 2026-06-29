// Knowledge data generated from the workspace knowledge folder
const buildings = [
  {
    "id": 1,
    "building_type": "Residential Apartment",
    "height_floors": "3-20",
    "primary_materials": [
      "Brick",
      "Concrete",
      "Glass"
    ],
    "roof_type": "Flat or Slightly Sloped",
    "load_capacity_category": "Medium",
    "wind_exposure": "Medium",
    "sun_exposure": "High",
    "green_roof_feasibility": "Medium",
    "green_facade_feasibility": "High",
    "recommended_systems": [
      "Self-Clinging Fa\u00e7ade System",
      "Trellis Support System",
      "Extensive Green Roof System"
    ],
    "suitable_plants": [
      "Boston Ivy",
      "Virginia Creeper",
      "English Ivy",
      "Clematis",
      "Star Jasmine",
      "Sedum album"
    ],
    "constraints": [
      "Moderate structural load limits",
      "Shared ownership approval needed",
      "Limited maintenance access on upper floors"
    ],
    "cooling_priority": "High",
    "notes": "Best balance of facade and rooftop greening opportunities in urban environments."
  },
  {
    "id": 2,
    "building_type": "Office Tower",
    "height_floors": "10-80",
    "primary_materials": [
      "Glass",
      "Steel",
      "Concrete"
    ],
    "roof_type": "Flat",
    "load_capacity_category": "High",
    "wind_exposure": "Very High",
    "sun_exposure": "Very High",
    "green_roof_feasibility": "Medium",
    "green_facade_feasibility": "Medium",
    "recommended_systems": [
      "Living Wall Modular Panel System",
      "Green Curtain System",
      "Extensive Green Roof System"
    ],
    "suitable_plants": [
      "Star Jasmine",
      "Sedum album",
      "Blue Fescue",
      "Mixed living wall species"
    ],
    "constraints": [
      "High wind loads at height",
      "Glass fa\u00e7ade limits self-clinging plants",
      "Maintenance requires access systems"
    ],
    "cooling_priority": "Very High",
    "notes": "High-impact candidate for vertical greening and cooling due to heat island contribution."
  },
  {
    "id": 3,
    "building_type": "School",
    "height_floors": "1-5",
    "primary_materials": [
      "Brick",
      "Concrete"
    ],
    "roof_type": "Flat",
    "load_capacity_category": "Medium",
    "wind_exposure": "Low",
    "sun_exposure": "High",
    "green_roof_feasibility": "High",
    "green_facade_feasibility": "High",
    "recommended_systems": [
      "Self-Clinging Fa\u00e7ade System",
      "Trellis Support System",
      "Extensive Green Roof System"
    ],
    "suitable_plants": [
      "Boston Ivy",
      "Virginia Creeper",
      "English Ivy",
      "Clematis",
      "Sedum album"
    ],
    "constraints": [
      "Safety restrictions for toxic berries (plant placement required)",
      "Moderate maintenance budget"
    ],
    "cooling_priority": "High",
    "notes": "Ideal educational building for visible green infrastructure systems."
  },
  {
    "id": 4,
    "building_type": "Parking Garage",
    "height_floors": "3-10",
    "primary_materials": [
      "Concrete"
    ],
    "roof_type": "Flat",
    "load_capacity_category": "High",
    "wind_exposure": "Medium",
    "sun_exposure": "High",
    "green_roof_feasibility": "High",
    "green_facade_feasibility": "Very High",
    "recommended_systems": [
      "Self-Clinging Fa\u00e7ade System",
      "Trellis Support System",
      "Extensive Green Roof System"
    ],
    "suitable_plants": [
      "Virginia Creeper",
      "Boston Ivy",
      "English Ivy",
      "Sedum album"
    ],
    "constraints": [
      "High exhaust pollution exposure",
      "Harsh microclimate conditions"
    ],
    "cooling_priority": "Very High",
    "notes": "One of the best candidates for fa\u00e7ade greening due to exposed concrete surfaces."
  },
  {
    "id": 5,
    "building_type": "Industrial Warehouse",
    "height_floors": "1-5",
    "primary_materials": [
      "Metal",
      "Steel",
      "Concrete"
    ],
    "roof_type": "Flat Metal Roof",
    "load_capacity_category": "Very High",
    "wind_exposure": "High",
    "sun_exposure": "Very High",
    "green_roof_feasibility": "Medium",
    "green_facade_feasibility": "Medium",
    "recommended_systems": [
      "Green Curtain System",
      "Extensive Green Roof System",
      "Hybrid Retrofit Green System"
    ],
    "suitable_plants": [
      "Sedum album",
      "Star Jasmine",
      "Trumpet Vine"
    ],
    "constraints": [
      "Heat accumulation on metal surfaces",
      "Large surface area requires scalable systems"
    ],
    "cooling_priority": "Very High",
    "notes": "High heat contributor; strong candidate for retrofit green systems."
  },
  {
    "id": 6,
    "building_type": "Residential House",
    "height_floors": "1-3",
    "primary_materials": [
      "Brick",
      "Wood Cladding",
      "Concrete"
    ],
    "roof_type": "Sloped",
    "load_capacity_category": "Low to Medium",
    "wind_exposure": "Low",
    "sun_exposure": "Medium",
    "green_roof_feasibility": "Low",
    "green_facade_feasibility": "High",
    "recommended_systems": [
      "Self-Clinging Fa\u00e7ade System",
      "Trellis Support System",
      "Green Curtain System"
    ],
    "suitable_plants": [
      "English Ivy",
      "Star Jasmine",
      "Clematis"
    ],
    "constraints": [
      "Limited roof load capacity",
      "Small fa\u00e7ade area"
    ],
    "cooling_priority": "Medium",
    "notes": "Best suited for fa\u00e7ade-based greening rather than full green roofs."
  },
  {
    "id": 7,
    "building_type": "Shopping Mall",
    "height_floors": "2-8",
    "primary_materials": [
      "Glass",
      "Concrete",
      "Steel"
    ],
    "roof_type": "Flat",
    "load_capacity_category": "High",
    "wind_exposure": "Medium",
    "sun_exposure": "Very High",
    "green_roof_feasibility": "High",
    "green_facade_feasibility": "Medium",
    "recommended_systems": [
      "Living Wall Modular Panel System",
      "Extensive Green Roof System",
      "Green Curtain System"
    ],
    "suitable_plants": [
      "Sedum album",
      "Star Jasmine",
      "Blue Fescue"
    ],
    "constraints": [
      "Large glass surfaces increase heat gain",
      "High public interaction areas require safety planning"
    ],
    "cooling_priority": "Very High",
    "notes": "High energy use building; strong candidate for visible green infrastructure."
  },
  {
    "id": 8,
    "building_type": "Hospital",
    "height_floors": "5-30",
    "primary_materials": [
      "Concrete",
      "Glass"
    ],
    "roof_type": "Flat",
    "load_capacity_category": "High",
    "wind_exposure": "High",
    "sun_exposure": "Medium",
    "green_roof_feasibility": "High",
    "green_facade_feasibility": "Medium",
    "recommended_systems": [
      "Extensive Green Roof System",
      "Trellis Support System",
      "Green Curtain System"
    ],
    "suitable_plants": [
      "Clematis",
      "Star Jasmine",
      "Sedum album"
    ],
    "constraints": [
      "Noise and air quality sensitivity",
      "Strict maintenance requirements"
    ],
    "cooling_priority": "Very High",
    "notes": "Improves recovery environments and reduces urban heat stress."
  },
  {
    "id": 9,
    "building_type": "University Campus Building",
    "height_floors": "2-15",
    "primary_materials": [
      "Brick",
      "Concrete"
    ],
    "roof_type": "Flat",
    "load_capacity_category": "Medium",
    "wind_exposure": "Low to Medium",
    "sun_exposure": "High",
    "green_roof_feasibility": "High",
    "green_facade_feasibility": "High",
    "recommended_systems": [
      "Self-Clinging Fa\u00e7ade System",
      "Trellis Support System",
      "Extensive Green Roof System"
    ],
    "suitable_plants": [
      "Boston Ivy",
      "Virginia Creeper",
      "Clematis",
      "Sedum album"
    ],
    "constraints": [
      "Budget constraints for large-scale installations",
      "Student safety considerations"
    ],
    "cooling_priority": "High",
    "notes": "Ideal for educational demonstration of sustainable infrastructure."
  },
  {
    "id": 10,
    "building_type": "Skyscraper Mixed-Use Tower",
    "height_floors": "40-100+",
    "primary_materials": [
      "Glass",
      "Steel",
      "Concrete"
    ],
    "roof_type": "Flat High Load",
    "load_capacity_category": "Very High",
    "wind_exposure": "Extreme",
    "sun_exposure": "Extreme",
    "green_roof_feasibility": "Medium",
    "green_facade_feasibility": "Medium",
    "recommended_systems": [
      "Living Wall Modular Panel System",
      "Green Curtain System",
      "Hybrid Retrofit Green System"
    ],
    "suitable_plants": [
      "Sedum album",
      "Star Jasmine",
      "Blue Fescue"
    ],
    "constraints": [
      "Extreme wind loading at height",
      "High engineering requirements",
      "Maintenance via mechanical systems only"
    ],
    "cooling_priority": "Very High",
    "notes": "Maximum urban heat island contributor; high-impact candidate for engineered greening systems."
  }
];

const systems = [
  {
    "id": 1,
    "system_name": "Self-Clinging Fa\u00e7ade System",
    "type": "Green Facade",
    "structure": "Direct plant attachment to wall",
    "compatible_plants": [
      "Boston Ivy",
      "Virginia Creeper",
      "English Ivy"
    ],
    "compatible_materials": [
      "Concrete",
      "Brick",
      "Stone Masonry"
    ],
    "requires_support_structure": false,
    "irrigation_needed": "Low (after establishment)",
    "load_capacity_requirement_kg_m2": 0,
    "installation_complexity": "Low",
    "cost_level": "Low",
    "maintenance_level": "Medium",
    "cooling_efficiency": "High",
    "air_quality_improvement": "Moderate",
    "stormwater_management": "Low",
    "best_use_cases": [
      "Residential walls",
      "Schools",
      "Parking garages",
      "Large masonry buildings"
    ],
    "limitations": [
      "Only works on rough surfaces",
      "Can damage weak or old mortar over time",
      "Not suitable for glass or metal surfaces"
    ],
    "notes": "Plants attach directly using rootlets or adhesive pads, forming a natural insulation layer."
  },
  {
    "id": 2,
    "system_name": "Trellis Support System",
    "type": "Green Fa\u00e7ade",
    "structure": "Metal or wooden framework attached to building",
    "compatible_plants": [
      "Clematis",
      "Star Jasmine",
      "Trumpet Vine",
      "Climbing Hydrangea"
    ],
    "compatible_materials": [
      "Concrete",
      "Brick",
      "Glass (with frame)",
      "Steel"
    ],
    "requires_support_structure": true,
    "irrigation_needed": "Low to Moderate",
    "load_capacity_requirement_kg_m2": 50,
    "installation_complexity": "Medium",
    "cost_level": "Medium",
    "maintenance_level": "Medium",
    "cooling_efficiency": "High",
    "air_quality_improvement": "Moderate",
    "stormwater_management": "Low",
    "best_use_cases": [
      "Office buildings",
      "Residential fa\u00e7ades",
      "Courtyards",
      "Urban plazas"
    ],
    "limitations": [
      "Requires structural installation",
      "Plants need training and pruning",
      "Wind exposure can affect growth"
    ],
    "notes": "Used when plants cannot self-attach; allows controlled vertical greening on any surface."
  },
  {
    "id": 3,
    "system_name": "Extensive Green Roof System",
    "type": "Green Roof",
    "structure": "Shallow soil substrate layer (5\u201315 cm)",
    "compatible_plants": [
      "Sedum album",
      "Blue Fescue"
    ],
    "compatible_materials": [
      "Asphalt Roof (retrofit)",
      "Metal Roof (engineered)",
      "Green Roof Substrate"
    ],
    "requires_support_structure": true,
    "irrigation_needed": "Very Low",
    "load_capacity_requirement_kg_m2": 60,
    "installation_complexity": "Medium",
    "cost_level": "Medium",
    "maintenance_level": "Low",
    "cooling_efficiency": "Very High",
    "air_quality_improvement": "Low to Moderate",
    "stormwater_management": "High",
    "best_use_cases": [
      "Residential rooftops",
      "Warehouses",
      "Schools",
      "Eco buildings"
    ],
    "limitations": [
      "Limited to shallow-root plants",
      "Not suitable for trees or large shrubs",
      "Drainage system required"
    ],
    "notes": "Lightweight green roof designed for drought-tolerant species and stormwater retention."
  },
  {
    "id": 4,
    "system_name": "Intensive Green Roof System",
    "type": "Green Roof",
    "structure": "Deep soil layer (15\u2013100+ cm)",
    "compatible_plants": [
      "Small Trees",
      "Shrubs",
      "Grasses"
    ],
    "compatible_materials": [
      "Concrete Roof",
      "Steel Structure (reinforced)"
    ],
    "requires_support_structure": true,
    "irrigation_needed": "Medium",
    "load_capacity_requirement_kg_m2": 300,
    "installation_complexity": "High",
    "cost_level": "High",
    "maintenance_level": "High",
    "cooling_efficiency": "Very High",
    "air_quality_improvement": "High",
    "stormwater_management": "Very High",
    "best_use_cases": [
      "Commercial rooftops",
      "Parks on buildings",
      "High-end developments"
    ],
    "limitations": [
      "Requires strong structural support",
      "High installation cost",
      "Ongoing irrigation and maintenance needed"
    ],
    "notes": "Functions like an elevated park ecosystem with trees and diverse vegetation."
  },
  {
    "id": 5,
    "system_name": "Living Wall Modular Panel System",
    "type": "Vertical Green Wall",
    "structure": "Pre-planted modular panels attached to wall",
    "compatible_plants": [
      "Clematis (trained sections)",
      "Small vines",
      "Ornamental grasses",
      "Mixed species panels"
    ],
    "compatible_materials": [
      "Concrete",
      "Brick",
      "Steel",
      "Glass (with backing)"
    ],
    "requires_support_structure": true,
    "irrigation_needed": "High (drip system)",
    "load_capacity_requirement_kg_m2": 80,
    "installation_complexity": "Very High",
    "cost_level": "Very High",
    "maintenance_level": "High",
    "cooling_efficiency": "Very High",
    "air_quality_improvement": "High",
    "stormwater_management": "Moderate",
    "best_use_cases": [
      "Luxury buildings",
      "City landmarks",
      "Indoor atriums",
      "Corporate offices"
    ],
    "limitations": [
      "Expensive installation",
      "Requires irrigation system",
      "Plant replacement needed over time"
    ],
    "notes": "Engineered living wall system using modular vegetation panels with controlled irrigation."
  },
  {
    "id": 6,
    "system_name": "Green Curtain System",
    "type": "Light Fa\u00e7ade Shading",
    "structure": "Free-hanging vines on cables or nets",
    "compatible_plants": [
      "Star Jasmine",
      "Clematis",
      "Morning glory-type vines"
    ],
    "compatible_materials": [
      "Glass",
      "Concrete",
      "Steel"
    ],
    "requires_support_structure": true,
    "irrigation_needed": "Low",
    "load_capacity_requirement_kg_m2": 20,
    "installation_complexity": "Low",
    "cost_level": "Low",
    "maintenance_level": "Low",
    "cooling_efficiency": "High",
    "air_quality_improvement": "Moderate",
    "stormwater_management": "Low",
    "best_use_cases": [
      "Office windows",
      "Glass fa\u00e7ades",
      "Sun shading systems"
    ],
    "limitations": [
      "Does not cover full wall",
      "Wind movement affects stability"
    ],
    "notes": "Uses hanging vegetation to reduce solar heat gain without structural wall attachment."
  },
  {
    "id": 7,
    "system_name": "Ground-Based Urban Tree System",
    "type": "Soil-Based Urban Greening",
    "structure": "Open soil planting pits",
    "compatible_plants": [
      "London Plane Tree",
      "Street trees",
      "Shade trees"
    ],
    "compatible_materials": [
      "Urban Soil",
      "Permeable Pavement"
    ],
    "requires_support_structure": false,
    "irrigation_needed": "Medium",
    "load_capacity_requirement_kg_m2": "N/A",
    "installation_complexity": "Low",
    "cost_level": "Medium",
    "maintenance_level": "Medium",
    "cooling_efficiency": "Very High",
    "air_quality_improvement": "Very High",
    "stormwater_management": "Very High",
    "best_use_cases": [
      "City streets",
      "Parks",
      "Schools",
      "Parking lot shading"
    ],
    "limitations": [
      "Requires root space",
      "Infrastructure conflict with pavement if not designed properly"
    ],
    "notes": "High-impact urban cooling system using canopy trees for large-scale environmental benefits."
  },
  {
    "id": 8,
    "system_name": "Hybrid Retrofit Green System",
    "type": "Mixed Infrastructure",
    "structure": "Combination of trellis + substrate + modular panels",
    "compatible_plants": [
      "Mixed vines",
      "Sedum layers",
      "Ornamental climbers"
    ],
    "compatible_materials": [
      "Concrete",
      "Brick",
      "Steel",
      "Metal Roof"
    ],
    "requires_support_structure": true,
    "irrigation_needed": "Variable",
    "load_capacity_requirement_kg_m2": "Variable",
    "installation_complexity": "Very High",
    "cost_level": "Very High",
    "maintenance_level": "High",
    "cooling_efficiency": "Very High",
    "air_quality_improvement": "Very High",
    "stormwater_management": "Very High",
    "best_use_cases": [
      "Smart city buildings",
      "Retrofitted skyscrapers",
      "Climate resilience projects"
    ],
    "limitations": [
      "Complex engineering required",
      "High cost",
      "Needs monitoring system"
    ],
    "notes": "Advanced system combining multiple green infrastructure types for maximum environmental performance."
  }
];

const materials = [
  {
    "id": 1,
    "material_name": "Concrete",
    "category": "Wall / Structure",
    "thermal_absorption": "High",
    "albedo": 0.25,
    "porosity": "Low",
    "water_permeability": "None",
    "surface_roughness": "Medium",
    "load_capacity_kg_m2": 1000,
    "insulation_value": "Low",
    "heat_retention": "High",
    "green_facade_compatibility": "High",
    "self_clinging_support": true,
    "trellis_required": false,
    "green_roof_suitability": "Medium",
    "stormwater_behavior": "Runoff",
    "pollution_interaction": "Low",
    "durability_years": 80,
    "maintenance_level": "Low",
    "urban_heat_island_effect": "High",
    "notes": "Common structural wall material; strong base for climbers like ivy and virginia creeper."
  },
  {
    "id": 2,
    "material_name": "Brick",
    "category": "Wall / Masonry",
    "thermal_absorption": "Medium-High",
    "albedo": 0.3,
    "porosity": "Medium",
    "water_permeability": "Low",
    "surface_roughness": "High",
    "load_capacity_kg_m2": 800,
    "insulation_value": "Medium",
    "heat_retention": "Medium-High",
    "green_facade_compatibility": "Very High",
    "self_clinging_support": true,
    "trellis_required": false,
    "green_roof_suitability": "Low",
    "stormwater_behavior": "Partial Absorption",
    "pollution_interaction": "Medium",
    "durability_years": 100,
    "maintenance_level": "Low",
    "urban_heat_island_effect": "High",
    "notes": "Ideal surface for adhesive climbers due to rough texture and moisture retention."
  },
  {
    "id": 3,
    "material_name": "Glass",
    "category": "Facade",
    "thermal_absorption": "Low (but heat gain high without coating)",
    "albedo": 0.15,
    "porosity": "None",
    "water_permeability": "None",
    "surface_roughness": "Very Low",
    "load_capacity_kg_m2": 50,
    "insulation_value": "Low",
    "heat_retention": "High (solar gain)",
    "green_facade_compatibility": "Low",
    "self_clinging_support": false,
    "trellis_required": true,
    "green_roof_suitability": "None",
    "stormwater_behavior": "Runoff",
    "pollution_interaction": "None",
    "durability_years": 30,
    "maintenance_level": "High",
    "urban_heat_island_effect": "High",
    "notes": "Requires external trellis systems for any vegetation; cannot support direct clinging plants."
  },
  {
    "id": 4,
    "material_name": "Steel",
    "category": "Structure / Industrial",
    "thermal_absorption": "Very High",
    "albedo": 0.2,
    "porosity": "None",
    "water_permeability": "None",
    "surface_roughness": "Low",
    "load_capacity_kg_m2": 2000,
    "insulation_value": "Very Low",
    "heat_retention": "Very High",
    "green_facade_compatibility": "Medium (needs structure)",
    "self_clinging_support": false,
    "trellis_required": true,
    "green_roof_suitability": "Medium (with system)",
    "stormwater_behavior": "Runoff",
    "pollution_interaction": "Low",
    "durability_years": 70,
    "maintenance_level": "Medium",
    "urban_heat_island_effect": "Very High",
    "notes": "Hot surface but structurally strong; used in industrial facades with support systems."
  },
  {
    "id": 5,
    "material_name": "Wood Cladding",
    "category": "Facade",
    "thermal_absorption": "Medium",
    "albedo": 0.4,
    "porosity": "Medium",
    "water_permeability": "Low",
    "surface_roughness": "Medium",
    "load_capacity_kg_m2": 300,
    "insulation_value": "High",
    "heat_retention": "Medium",
    "green_facade_compatibility": "Medium",
    "self_clinging_support": false,
    "trellis_required": true,
    "green_roof_suitability": "Low",
    "stormwater_behavior": "Absorption",
    "pollution_interaction": "Low",
    "durability_years": 30,
    "maintenance_level": "Medium-High",
    "urban_heat_island_effect": "Medium",
    "notes": "Requires a trellis system away from the surface; direct moisture exposure from self-clinging plants can degrade and rot wood cladding."
  },
  {
    "id": 6,
    "material_name": "Asphalt Roof",
    "category": "Roof",
    "thermal_absorption": "Very High",
    "albedo": 0.1,
    "porosity": "None",
    "water_permeability": "None",
    "surface_roughness": "Low",
    "load_capacity_kg_m2": 150,
    "insulation_value": "Low",
    "heat_retention": "Very High",
    "green_facade_compatibility": "None",
    "self_clinging_support": false,
    "trellis_required": false,
    "green_roof_suitability": "Low (retrofit only)",
    "stormwater_behavior": "Runoff",
    "pollution_interaction": "Low",
    "durability_years": 20,
    "maintenance_level": "Medium",
    "urban_heat_island_effect": "Very High",
    "notes": "Major contributor to urban heat island; only supports green systems if retrofitted."
  },
  {
    "id": 7,
    "material_name": "Metal Roof",
    "category": "Roof",
    "thermal_absorption": "High",
    "albedo": 0.65,
    "porosity": "None",
    "water_permeability": "None",
    "surface_roughness": "Low",
    "load_capacity_kg_m2": 200,
    "insulation_value": "Low",
    "heat_retention": "High",
    "green_facade_compatibility": "Low",
    "self_clinging_support": false,
    "trellis_required": false,
    "green_roof_suitability": "Medium (engineered systems)",
    "stormwater_behavior": "Runoff",
    "pollution_interaction": "Low",
    "durability_years": 40,
    "maintenance_level": "Low",
    "urban_heat_island_effect": "Medium",
    "notes": "Can support green roofs only with engineered layers and insulation. High reflection properties when clean."
  },
  {
    "id": 8,
    "material_name": "Green Roof Substrate",
    "category": "Engineered Roof System",
    "thermal_absorption": "Low",
    "albedo": 0.35,
    "porosity": "High",
    "water_permeability": "High",
    "surface_roughness": "Medium",
    "load_capacity_kg_m2": 500,
    "insulation_value": "High",
    "heat_retention": "Low",
    "green_facade_compatibility": "N/A",
    "self_clinging_support": false,
    "trellis_required": false,
    "green_roof_suitability": "Excellent",
    "stormwater_behavior": "Retention",
    "pollution_interaction": "High",
    "durability_years": 30,
    "maintenance_level": "Medium",
    "urban_heat_island_effect": "Low",
    "notes": "Designed specifically for vegetation systems like sedum and grasses."
  },
  {
    "id": 9,
    "material_name": "Urban Soil",
    "category": "Ground / Landscape",
    "thermal_absorption": "Medium",
    "albedo": 0.25,
    "porosity": "High",
    "water_permeability": "High",
    "surface_roughness": "Medium",
    "load_capacity_kg_m2": 0,
    "insulation_value": "Medium",
    "heat_retention": "Low",
    "green_facade_compatibility": "N/A",
    "self_clinging_support": false,
    "trellis_required": false,
    "green_roof_suitability": "N/A",
    "stormwater_behavior": "Absorption",
    "pollution_interaction": "High",
    "durability_years": null,
    "maintenance_level": "Medium",
    "urban_heat_island_effect": "Low",
    "notes": "Supports trees and large vegetation like London Plane Tree for maximum cooling impact."
  },
  {
    "id": 10,
    "material_name": "Permeable Pavement",
    "category": "Ground / Infrastructure",
    "thermal_absorption": "Medium",
    "albedo": 0.3,
    "porosity": "High",
    "water_permeability": "High",
    "surface_roughness": "Medium",
    "load_capacity_kg_m2": 600,
    "insulation_value": "Medium",
    "heat_retention": "Medium",
    "green_facade_compatibility": "Low",
    "self_clinging_support": false,
    "trellis_required": false,
    "green_roof_suitability": "None",
    "stormwater_behavior": "Absorption",
    "pollution_interaction": "Medium",
    "durability_years": 25,
    "maintenance_level": "Medium",
    "urban_heat_island_effect": "Medium",
    "notes": "Used in sidewalks and plazas; supports surrounding tree systems and reduces runoff."
  }
];

const plants = [
  {
    "id": 1,
    "common_name": "Boston Ivy",
    "scientific_name": "Parthenocissus tricuspidata",
    "family": "Vitaceae",
    "plant_type": "Deciduous climber",
    "native_region": [
      "China",
      "Japan"
    ],
    "usda_hardiness_zones": "4-8",
    "sunlight": [
      "Full Sun",
      "Partial Shade",
      "Full Shade"
    ],
    "soil": [
      "Loam",
      "Clay",
      "Sand",
      "Chalk"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Alkaline"
    ],
    "water_requirements": "Moderate",
    "drainage": "Moist but well-drained",
    "growth_rate": "Fast",
    "mature_height_m": "12+",
    "mature_spread_m": "8+",
    "time_to_maturity": "5-10 years",
    "evergreen": false,
    "maintenance": "Low",
    "flowering": true,
    "flower_color": "Green",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Blue-Black",
      "bird_friendly": true,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": true,
    "drought_tolerance": "Moderate",
    "pollution_tolerance": "High",
    "wind_tolerance": "High",
    "salt_tolerance": "Moderate",
    "urban_suitability": "Excellent",
    "green_facade": true,
    "living_wall": false,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": true,
    "cooling_potential": "High",
    "air_quality_benefit": "Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Moderate",
    "maintenance_tasks": [
      "Annual pruning",
      "Remove unwanted shoots",
      "Inspect attachment points"
    ],
    "warnings": [
      "Adhesive pads may leave residue on masonry.",
      "Berries contain oxalic acid and are harmful if eaten.",
      "Sap may irritate skin."
    ],
    "recommended_buildings": [
      "Office",
      "Apartment",
      "School",
      "University",
      "Parking Garage",
      "Warehouse"
    ],
    "notes": "A vigorous self-clinging climber widely used to green walls. Brilliant red and purple autumn foliage. Excellent for quickly covering large masonry surfaces."
  },
  {
    "id": 2,
    "common_name": "Virginia Creeper",
    "scientific_name": "Parthenocissus quinquefolia",
    "family": "Vitaceae",
    "plant_type": "Deciduous climber",
    "native_region": [
      "Eastern Canada",
      "Eastern United States",
      "Central United States",
      "Eastern Mexico"
    ],
    "usda_hardiness_zones": "3-9",
    "sunlight": [
      "Full Sun",
      "Partial Shade",
      "Full Shade"
    ],
    "soil": [
      "Loam",
      "Clay",
      "Sand"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Alkaline"
    ],
    "water_requirements": "Moderate",
    "drainage": "Moist but well-drained",
    "growth_rate": "Fast",
    "mature_height_m": "15-20",
    "mature_spread_m": "5-10",
    "time_to_maturity": "5-10 years",
    "evergreen": false,
    "maintenance": "Low",
    "flowering": true,
    "flower_color": "Greenish White",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Dark Blue",
      "bird_friendly": true,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": true,
    "drought_tolerance": "High",
    "pollution_tolerance": "High",
    "wind_tolerance": "High",
    "salt_tolerance": "Moderate",
    "urban_suitability": "Excellent",
    "green_facade": true,
    "living_wall": false,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": true,
    "cooling_potential": "High",
    "air_quality_benefit": "Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Moderate",
    "maintenance_tasks": [
      "Annual pruning",
      "Control vigorous growth",
      "Remove unwanted stems"
    ],
    "warnings": [
      "Can spread aggressively if not managed.",
      "Berries contain oxalic acid and are toxic to humans but valuable to birds.",
      "Adhesive pads may mark painted or delicate surfaces."
    ],
    "recommended_buildings": [
      "Office",
      "Apartment",
      "School",
      "University",
      "Parking Garage",
      "Warehouse",
      "Industrial Buildings"
    ],
    "notes": "A vigorous North American native vine valued for rapid wall coverage, brilliant red autumn foliage, and exceptional wildlife habitat. Frequently used on green facades and trellis systems due to its adaptability and tolerance of urban conditions."
  },
  {
    "id": 3,
    "common_name": "English Ivy",
    "scientific_name": "Hedera helix",
    "family": "Araliaceae",
    "plant_type": "Evergreen climber",
    "native_region": [
      "Europe",
      "Western Asia"
    ],
    "usda_hardiness_zones": "4-9",
    "sunlight": [
      "Full Shade",
      "Partial Shade",
      "Full Sun"
    ],
    "soil": [
      "Loam",
      "Clay",
      "Sand",
      "Chalk"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Alkaline"
    ],
    "water_requirements": "Moderate",
    "drainage": "Moist but well-drained",
    "growth_rate": "Fast",
    "mature_height_m": "20-30",
    "mature_spread_m": "5-15",
    "time_to_maturity": "5-10 years",
    "evergreen": true,
    "maintenance": "Medium",
    "flowering": true,
    "flower_color": "Greenish Yellow",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Black",
      "bird_friendly": true,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": true,
    "drought_tolerance": "Moderate",
    "pollution_tolerance": "High",
    "wind_tolerance": "High",
    "salt_tolerance": "Moderate",
    "urban_suitability": "Excellent",
    "green_facade": true,
    "living_wall": false,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": true,
    "cooling_potential": "High",
    "air_quality_benefit": "Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Moderate",
    "maintenance_tasks": [
      "Prune regularly to control spread",
      "Remove growth from roofs, gutters, and windows",
      "Monitor for structural issues on older buildings"
    ],
    "warnings": [
      "Considered invasive in many regions outside its native range.",
      "Can damage weakened mortar or deteriorating masonry via aerial rootlets.",
      "Berries and leaves are toxic if ingested.",
      "Do not recommend for historic buildings or sensitive ecosystems."
    ],
    "recommended_buildings": [
      "Office",
      "Apartment",
      "School",
      "University",
      "Parking Garage"
    ],
    "notes": "A dense evergreen climber valued for year-round coverage, shading, and wildlife habitat in its native range. UrbanBloom should check local regulations before recommending this species because it is invasive in many parts of the world."
  },
  {
    "id": 4,
    "common_name": "Climbing Hydrangea",
    "scientific_name": "Hydrangea anomala subsp. petiolaris",
    "family": "Hydrangeaceae",
    "plant_type": "Deciduous climbing shrub",
    "native_region": [
      "East Asia"
    ],
    "usda_hardiness_zones": "4-8",
    "sunlight": [
      "Partial Shade",
      "Full Shade",
      "Morning Sun"
    ],
    "soil": [
      "Loam",
      "Clay",
      "Rich Organic Soil"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Slightly Alkaline"
    ],
    "water_requirements": "Moderate to High",
    "drainage": "Moist but well-drained",
    "growth_rate": "Slow to Moderate",
    "mature_height_m": "10-15",
    "mature_spread_m": "3-6",
    "time_to_maturity": "5-7 years",
    "evergreen": false,
    "maintenance": "Low",
    "flowering": true,
    "flower_color": "White",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Brown",
      "bird_friendly": false,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": false,
    "drought_tolerance": "Low",
    "pollution_tolerance": "Moderate",
    "wind_tolerance": "Moderate",
    "salt_tolerance": "Low",
    "urban_suitability": "Good",
    "green_facade": true,
    "living_wall": false,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": true,
    "cooling_potential": "Moderate",
    "air_quality_benefit": "Low to Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Low to Moderate",
    "maintenance_tasks": [
      "Minimal pruning after flowering",
      "Ensure soil stays consistently moist",
      "Remove dead or weak stems",
      "Support young plants until self-clinging develops"
    ],
    "warnings": [
      "Slow to establish compared to other climbers.",
      "Can struggle in hot, dry urban walls without irrigation.",
      "Needs strong support during early growth stages.",
      "Flowering delay of several years is common."
    ],
    "recommended_buildings": [
      "Residential Homes",
      "Schools",
      "Office Buildings",
      "Courtyards",
      "Hospitals"
    ],
    "notes": "A shade-tolerant, self-clinging climber valued for its large white lace-cap flowers and ability to green north-facing or low-light building facades where other vines fail."
  },
  {
    "id": 5,
    "common_name": "Trumpet Vine",
    "scientific_name": "Campsis radicans",
    "family": "Bignoniaceae",
    "plant_type": "Deciduous woody climbing vine",
    "native_region": [
      "Eastern United States"
    ],
    "usda_hardiness_zones": "4-9",
    "sunlight": [
      "Full Sun",
      "Partial Shade"
    ],
    "soil": [
      "Loam",
      "Sand",
      "Clay"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Alkaline"
    ],
    "water_requirements": "Low to Moderate",
    "drainage": "Well-drained",
    "growth_rate": "Very Fast",
    "mature_height_m": "10-12",
    "mature_spread_m": "4-8",
    "time_to_maturity": "2-4 years",
    "evergreen": false,
    "maintenance": "High",
    "flowering": true,
    "flower_color": "Orange to Red",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Brown",
      "bird_friendly": true,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": true,
    "drought_tolerance": "High",
    "pollution_tolerance": "High",
    "wind_tolerance": "High",
    "salt_tolerance": "Moderate",
    "urban_suitability": "Good",
    "green_facade": true,
    "living_wall": false,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": true,
    "cooling_potential": "High",
    "air_quality_benefit": "Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Moderate",
    "maintenance_tasks": [
      "Aggressive pruning required to control spread",
      "Remove suckers regularly from base and nearby areas",
      "Train main vines early to desired structure",
      "Clean up fallen seed pods"
    ],
    "warnings": [
      "Highly aggressive spreader; can become invasive in some regions.",
      "Can damage paint, mortar, and wooden structures if unmanaged via aerial rootlets.",
      "Produces suckers that spread far from main plant.",
      "Not suitable for small or delicate building facades."
    ],
    "recommended_buildings": [
      "Warehouses",
      "Parking Structures",
      "Large Commercial Buildings",
      "Industrial Sites",
      "Sound Barriers"
    ],
    "notes": "A high-impact flowering climber with strong visual appeal and excellent heat tolerance. Best used in controlled environments due to its aggressive growth habit."
  },
  {
    "id": 6,
    "common_name": "White Stonecrop",
    "scientific_name": "Sedum album",
    "family": "Crassulaceae",
    "plant_type": "Evergreen succulent groundcover",
    "native_region": [
      "Europe",
      "Northern Africa",
      "Western Asia"
    ],
    "usda_hardiness_zones": "3-8",
    "sunlight": [
      "Full Sun",
      "Partial Shade"
    ],
    "soil": [
      "Sandy",
      "Gravelly",
      "Poor Nutrient Soil",
      "Loam"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Alkaline"
    ],
    "water_requirements": "Very Low",
    "drainage": "Excellent (dry conditions preferred)",
    "growth_rate": "Moderate",
    "mature_height_m": "0.05-0.1",
    "mature_spread_m": "0.3-0.6",
    "time_to_maturity": "1-2 years",
    "evergreen": true,
    "maintenance": "Very Low",
    "flowering": true,
    "flower_color": "White to Pale Pink",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Brown",
      "bird_friendly": false,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": false,
    "drought_tolerance": "Very High",
    "pollution_tolerance": "High",
    "wind_tolerance": "High",
    "salt_tolerance": "High",
    "urban_suitability": "Excellent",
    "green_facade": false,
    "living_wall": true,
    "green_roof": true,
    "trellis_compatible": false,
    "self_clinging": false,
    "cooling_potential": "High (roof insulation effect)",
    "air_quality_benefit": "Low to Moderate",
    "noise_reduction": "Low",
    "stormwater_benefit": "High",
    "carbon_storage": "Low",
    "maintenance_tasks": [
      "Occasional weeding to prevent invasive species takeover",
      "Inspect roof mats annually",
      "Remove dead patches if overcrowded",
      "Minimal irrigation only during establishment period"
    ],
    "warnings": [
      "Can be outcompeted by taller vegetation if not managed.",
      "Requires proper roof waterproofing and drainage layers.",
      "Not suitable for shaded or heavily shaded roofs.",
      "Poor performance in waterlogged conditions."
    ],
    "recommended_buildings": [
      "Residential Homes",
      "Office Buildings",
      "Schools",
      "Warehouses",
      "Eco-Friendly Commercial Buildings"
    ],
    "notes": "A foundational green roof species used in extensive green roof systems due to its extreme drought tolerance, low maintenance requirements, and ability to stabilize roof substrates while improving thermal insulation."
  },
  {
    "id": 7,
    "common_name": "Star Jasmine",
    "scientific_name": "Trachelospermum jasminoides",
    "family": "Apocynaceae",
    "plant_type": "Evergreen woody vine / climbing shrub",
    "native_region": [
      "East Asia",
      "Southeast Asia"
    ],
    "usda_hardiness_zones": "8-11",
    "sunlight": [
      "Full Sun",
      "Partial Shade"
    ],
    "soil": [
      "Loam",
      "Sand",
      "Clay"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Slightly Alkaline"
    ],
    "water_requirements": "Low to Moderate",
    "drainage": "Well-drained",
    "growth_rate": "Moderate",
    "mature_height_m": "4-12",
    "mature_spread_m": "2-6",
    "time_to_maturity": "3-5 years",
    "evergreen": true,
    "maintenance": "Low",
    "flowering": true,
    "flower_color": "White",
    "flower_fragrance": "Strong sweet scent",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Brown",
      "bird_friendly": false,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": false,
    "drought_tolerance": "Moderate",
    "pollution_tolerance": "High",
    "wind_tolerance": "Moderate",
    "salt_tolerance": "Moderate",
    "urban_suitability": "Excellent",
    "green_facade": true,
    "living_wall": true,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": false,
    "cooling_potential": "Moderate to High",
    "air_quality_benefit": "Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Moderate",
    "maintenance_tasks": [
      "Train vines on trellis or support structure",
      "Light pruning after flowering",
      "Remove stray shoots from building edges",
      "Water during prolonged drought in establishment phase"
    ],
    "warnings": [
      "Not self-clinging; requires support structure.",
      "Can become dense and heavy over time if unpruned.",
      "Late frosts can damage new growth in marginal climates.",
      "Milky sap may irritate skin in some individuals."
    ],
    "recommended_buildings": [
      "Residential Homes",
      "Apartments",
      "Courtyards",
      "Schools",
      "Office Entrances"
    ],
    "notes": "A highly valued ornamental climber used in warm urban climates for fa\u00e7ade greening due to its evergreen coverage, strong fragrance, and low maintenance once established. Requires structural support rather than self-clinging."
  },
  {
    "id": 8,
    "common_name": "Clematis",
    "scientific_name": "Clematis spp. (e.g., Clematis viticella hybrids)",
    "family": "Ranunculaceae",
    "plant_type": "Deciduous flowering climbing vine",
    "native_region": [
      "Europe",
      "Asia"
    ],
    "usda_hardiness_zones": "4-9",
    "sunlight": [
      "Full Sun (flowers best)",
      "Partial Shade (roots shaded preferred)"
    ],
    "soil": [
      "Loam",
      "Sandy Loam",
      "Rich Organic Soil"
    ],
    "soil_ph": [
      "Neutral",
      "Slightly Acid",
      "Slightly Alkaline"
    ],
    "water_requirements": "Moderate",
    "drainage": "Well-drained but moist",
    "growth_rate": "Moderate",
    "mature_height_m": "2-5",
    "mature_spread_m": "1-3",
    "time_to_maturity": "2-4 years",
    "evergreen": false,
    "maintenance": "Medium",
    "flowering": true,
    "flower_color": "Purple, Pink, White, Blue (varies by cultivar)",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Silver-Grey",
      "bird_friendly": true,
      "human_edible": false
    },
    "supports_pollinators": true,
    "supports_birds": true,
    "drought_tolerance": "Low to Moderate",
    "pollution_tolerance": "Moderate",
    "wind_tolerance": "Moderate",
    "salt_tolerance": "Low",
    "urban_suitability": "Good",
    "green_facade": true,
    "living_wall": true,
    "green_roof": false,
    "trellis_compatible": true,
    "self_clinging": false,
    "cooling_potential": "Moderate",
    "air_quality_benefit": "Low to Moderate",
    "noise_reduction": "Moderate",
    "stormwater_benefit": "Low",
    "carbon_storage": "Low to Moderate",
    "maintenance_tasks": [
      "Provide trellis or wire support for climbing",
      "Prune depending on cultivar group (light or hard prune)",
      "Keep roots shaded and cool with mulch or low plants",
      "Remove dead stems in early spring"
    ],
    "warnings": [
      "Requires proper pruning group knowledge (can be confusing for beginners).",
      "Does not self-clinging; must be trained on support structures via twisting petioles.",
      "Sensitive to drought stress during establishment.",
      "Some species can become woody and tangled if neglected."
    ],
    "recommended_buildings": [
      "Residential Homes",
      "Apartments",
      "Courtyards",
      "Schools",
      "Garden Walls"
    ],
    "notes": "A highly ornamental flowering climber used in urban greening systems for decorative fa\u00e7ade enhancement. Best performance occurs when roots are shaded and vines receive adequate sun exposure on upper structures."
  },
  {
    "id": 9,
    "common_name": "Blue Fescue",
    "scientific_name": "Festuca glauca",
    "family": "Poaceae",
    "plant_type": "Evergreen ornamental grass",
    "native_region": [
      "Europe"
    ],
    "usda_hardiness_zones": "4-8",
    "sunlight": [
      "Full Sun",
      "Partial Shade"
    ],
    "soil": [
      "Sandy",
      "Loam",
      "Gravelly Soil",
      "Poor Nutrient Soil"
    ],
    "soil_ph": [
      "Acid",
      "Neutral",
      "Alkaline"
    ],
    "water_requirements": "Low",
    "drainage": "Excellent (dry preferred)",
    "growth_rate": "Moderate",
    "mature_height_m": "0.2-0.4",
    "mature_spread_m": "0.2-0.4",
    "time_to_maturity": "1-2 years",
    "evergreen": true,
    "maintenance": "Very Low",
    "flowering": true,
    "flower_color": "Tan to light brown seed heads",
    "fruit": {
      "produces_fruit": true,
      "fruit_color": "Grain/Caryopsis (Tan)",
      "bird_friendly": true,
      "human_edible": false
    },
    "supports_pollinators": false,
    "supports_birds": true,
    "drought_tolerance": "High",
    "pollution_tolerance": "High",
    "wind_tolerance": "High",
    "salt_tolerance": "Moderate to High",
    "urban_suitability": "Excellent",
    "green_facade": false,
    "living_wall": true,
    "green_roof": true,
    "trellis_compatible": false,
    "self_clinging": false,
    "cooling_potential": "Moderate to High",
    "air_quality_benefit": "Low to Moderate",
    "noise_reduction": "Low",
    "stormwater_benefit": "Moderate",
    "carbon_storage": "Low",
    "maintenance_tasks": [
      "Trim dead foliage in early spring",
      "Divide clumps every few years to maintain vigor",
      "Remove thatch buildup if center dies out",
      "Minimal irrigation after establishment"
    ],
    "warnings": [
      "Can decline in very humid or poorly drained soils.",
      "May die out in the center if not divided periodically.",
      "Not suitable for heavily shaded environments.",
      "Performance decreases in overly rich soils."
    ],
    "recommended_buildings": [
      "Residential Homes",
      "Office Rooftops",
      "Schools",
      "Parking Structures",
      "Urban Green Roof Systems"
    ],
    "notes": "A drought-tolerant ornamental grass commonly used in extensive green roof systems and urban xeriscaping. Provides year-round visual texture and supports low-maintenance sustainable landscaping designs."
  }
];

const ai_rules = {
  "system_name": "Urban Green Infrastructure Decision Engine",
  "version": "1.0",
  "scoring_model": {
    "base_score": 50,
    "min_score": 0,
    "max_score": 100,
    "final_formula": "clamp(0, 100, (base + soft_scores + hard_pass_bonus) * multipliers)"
  },
  "priority_levels": {
    "high": 3,
    "medium": 2,
    "low": 1
  },
  "rule_categories": {
    "hard_constraints": [],
    "soft_rules": [],
    "environment_rules": [],
    "system_rules": [],
    "explanation_rules": []
  },
  "hard_constraints": [
    {
      "id": "H1",
      "name": "Structural Load Compatibility",
      "condition": "system.type == 'Green Roof'",
      "requirement": "building.load_capacity_category in ['High', 'Very High']",
      "failure_action": "reject_candidate",
      "penalty": -100
    },
    {
      "id": "H2",
      "name": "Self-Clinging Material Restriction",
      "condition": "plant.self_clinging == true",
      "requirement": "material in ['Brick', 'Concrete', 'Stone']",
      "failure_action": "reject_candidate",
      "penalty": -100
    },
    {
      "id": "H3",
      "name": "No Unsupported Vines",
      "condition": "plant.self_clinging == false",
      "requirement": "system.requires_support_structure == true",
      "failure_action": "reject_candidate",
      "penalty": -80
    }
  ],
  "soft_rules": [
    {
      "id": "S1",
      "name": "Cooling Efficiency Boost",
      "condition": "building.cooling_priority == 'High' or 'Very High'",
      "score_change": 15,
      "weight": 1.3,
      "affects_traits": [
        "cooling_potential",
        "shade_density"
      ]
    },
    {
      "id": "S2",
      "name": "Drought Resistance Match",
      "condition": "environment.climate == 'Hot-Dry'",
      "requirements": [
        "plant.drought_tolerance in ['High', 'Very High']",
        "plant.water_requirements in ['Low', 'Very Low']"
      ],
      "score_change": 20,
      "weight": 1.4
    },
    {
      "id": "S3",
      "name": "Urban Pollution Tolerance",
      "condition": "building_type in ['Office Tower', 'Parking Garage', 'Industrial Warehouse']",
      "score_change": 10,
      "preferred_trait": "pollution_tolerance >= High"
    },
    {
      "id": "S4",
      "name": "Fast Coverage Priority",
      "condition": "user_goal == 'rapid_greening'",
      "preferred_trait": "growth_rate == 'Fast' or 'Very Fast'",
      "score_change": 12
    }
  ],
  "system_rules": [
    {
      "id": "SYS1",
      "name": "Trellis Requirement Enforcement",
      "condition": "system.name in ['Trellis Support System', 'Green Curtain System']",
      "requires": "plant.self_clinging == false",
      "score_change": 10
    },
    {
      "id": "SYS2",
      "name": "Living Wall Optimization",
      "condition": "system.type == 'Vertical Green Wall'",
      "preferred_traits": [
        "low_root_mass",
        "moderate_water_needs"
      ],
      "score_multiplier": 1.2
    },
    {
      "id": "SYS3",
      "name": "Green Roof Ecosystem Efficiency",
      "condition": "system.type contains 'Green Roof'",
      "boost_traits": [
        "stormwater_benefit",
        "cooling_potential"
      ],
      "score_multiplier": 1.3
    }
  ],
  "environment_rules": [
    {
      "id": "E1",
      "name": "Heat Island Effect Amplification",
      "condition": "building.sun_exposure == 'Very High'",
      "boost": [
        "cooling_potential"
      ],
      "weight": 1.5
    },
    {
      "id": "E2",
      "name": "Wind Stress Penalty",
      "condition": "building.wind_exposure == 'Extreme'",
      "penalty_traits": [
        "tall_vines",
        "fragile_stems"
      ],
      "score_change": -15
    },
    {
      "id": "E3",
      "name": "Low Maintenance Preference",
      "condition": "maintenance_priority == 'Low'",
      "preferred_trait": "maintenance == 'Low' or 'Very Low'",
      "score_change": 10
    }
  ],
  "explanation_rules": [
    {
      "id": "X1",
      "type": "selection_reason",
      "template": "Selected because plant traits match system + building conditions."
    },
    {
      "id": "X2",
      "type": "rejection_reason",
      "template": "Rejected due to mismatch in structural or environmental constraints."
    },
    {
      "id": "X3",
      "type": "confidence_explanation",
      "template": "Confidence is based on rule matches, penalties, and system compatibility scoring."
    }
  ],
  "confidence_system": {
    "base_score": 50,
    "rule_application": "sum(all_soft_rule_scores + bonuses + penalties)",
    "multipliers": "apply system + environment weights",
    "final_output": "normalize to 0-100",
    "confidence_meaning": {
      "0-40": "Poor match",
      "41-60": "Moderate match",
      "61-80": "Good match",
      "81-100": "Excellent match"
    }
  },
  "conflict_resolution": {
    "method": "weighted_priority",
    "priority_order": [
      "hard_constraints",
      "environment_rules",
      "system_rules",
      "soft_rules"
    ]
  }
};

