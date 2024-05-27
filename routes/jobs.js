// routes/jobs.js
import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} from "../controllers/jobs.js";

import authenticateUser from "../middleware/authentication.js";

router.post("/", authenticateUser, createJob);
router.get("/", authenticateUser, getAllJobs);
router.get("/:id", authenticateUser, getJob);
router.delete("/:id", authenticateUser, deleteJob);
router.patch("/:id", authenticateUser, updateJob);

export default router;
