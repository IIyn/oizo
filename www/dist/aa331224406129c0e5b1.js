function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import * as sim from "lib-simulation-wasm";
import { Viewport } from "./app/viewport";
var viewport = new Viewport(document.getElementById("viewport"));

/**
 * Current simulation.
 *
 * @type {Simulation}
 */
var simulation = new sim.Simulation(sim.Simulation.default_config());

/* ---------- */

function redraw() {
  var stats = simulation.step();
  if (stats) {
    var train = document.getElementById("train");
    train.textContent = stats;
  }
  var config = simulation.config();
  var world = simulation.world();
  viewport.clear();
  var _iterator = _createForOfIteratorHelper(world.foods),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var food = _step.value;
      viewport.drawCircle(food.x, food.y, config.food_size / 2.0, "rgb(0, 255, 128)");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(world.animals),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var animal = _step2.value;
      viewport.drawTriangle(animal.x, animal.y, config.food_size, animal.rotation, "rgb(255, 255, 255)");
      var anglePerCell = config.eye_fov_angle / config.eye_cells;
      for (var cellId = 0; cellId < config.eye_cells; cellId += 1) {
        var angleFrom = animal.rotation - config.eye_fov_angle / 2.0 + cellId * anglePerCell + Math.PI / 2.0;
        var angleTo = angleFrom + anglePerCell;
        var energy = animal.vision[cellId];
        viewport.drawArc(animal.x, animal.y, config.food_size * 2.5, angleFrom, angleTo, "rgba(0, 255, 128, ".concat(energy, ")"));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  requestAnimationFrame(redraw);
}
redraw();