import * as sim from "lib-simulation-wasm";
import "../index.css";
import { Viewport } from "./app/viewport";

const viewport = new Viewport(document.getElementById("viewport"));

/**
 * Current simulation.
 *
 * @type {Simulation}
 */
let simulation = new sim.Simulation(sim.Simulation.default_config());

/* ---------- */

function redraw() {
  const stats = simulation.step();

  if (stats) {
    const train = document.getElementById("train");
    train.textContent = stats;
  }

  const config = simulation.config();
  const world = simulation.world();

  viewport.clear();

  for (const food of world.foods) {
    viewport.drawCircle(
      food.x,
      food.y,
      config.food_size / 2.0,
      "rgb(0, 255, 128)"
    );
  }

  for (const animal of world.animals) {
    viewport.drawTriangle(
      animal.x,
      animal.y,
      config.food_size,
      animal.rotation,
      "rgb(255, 255, 255)"
    );

    const anglePerCell = config.eye_fov_angle / config.eye_cells;

    for (let cellId = 0; cellId < config.eye_cells; cellId += 1) {
      const angleFrom =
        animal.rotation -
        config.eye_fov_angle / 2.0 +
        cellId * anglePerCell +
        Math.PI / 2.0;

      const angleTo = angleFrom + anglePerCell;
      const energy = animal.vision[cellId];

      viewport.drawArc(
        animal.x,
        animal.y,
        config.food_size * 2.5,
        angleFrom,
        angleTo,
        `rgba(0, 255, 128, ${energy})`
      );
    }
  }

  requestAnimationFrame(redraw);
}

redraw();
