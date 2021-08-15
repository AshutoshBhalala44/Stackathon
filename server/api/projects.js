const router = require("express").Router();
const {
  models: { Project },
} = require("../db");
module.exports = router;

// router mounted at: /api/projects
router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.send(project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.update(req.body);
    res.send(project);
  } catch (err) {
    next(err);
  }
});
