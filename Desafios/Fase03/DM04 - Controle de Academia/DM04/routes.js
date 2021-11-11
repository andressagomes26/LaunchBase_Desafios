const express = require("express")
const routes = express.Router()
const teachers = require("./controllers/teachers")
const students = require("./controllers/students")

routes.get("/", function(req, res){
    return res.redirect("teachers")
})

// Routes teachers
routes.get("/teachers", teachers.index)
routes.get("/teachers/create", teachers.create)
routes.get("/teachers/:id", teachers.show)
routes.post("/teachers", teachers.post)
routes.get("/teachers/:id/edit", teachers.edit)
routes.put("/teachers", teachers.update)
routes.delete("/teachers", teachers.delete)

// Routes students
routes.get("/students", students.index)
routes.get("/students/create", students.create)
routes.get("/students/:id", students.show)
routes.post("/students", students.post)
routes.get("/students/:id/edit", students.edit)
routes.put("/students", students.update)
routes.delete("/students", students.delete)

module.exports = routes