const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const members = require("./../../Members");

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status("400").json({ msg: "Error 400. Not found" });
  }
});

router.get("/", (req, res) => {
  res.json(members);
});

router.post("/", (req, res) => {
  const newMember = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };

  if (!req.body.name || !req.body.email) {
    res.status("400").json({ msg: "Please enter name and age!" });
  } else {
    members.push(newMember);
    // res.json(members);
    res.redirect('/')
  }
});

router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    const updatedMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updatedMember.name ? updatedMember.name : member.name;
        member.email = updatedMember.email ? updatedMember.email : member.email;

        res.status('200').json({ msg: "members Updated", member});
      }
    });
  } else {
    res.status("400").json({ msg: "Error 400. Not found" });
  }
});

router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({ msg: "member deleted", members: members.filter((member) => member.id !== parseInt(req.params.id))});
  } else {
    res.status("400").json({ msg: "Error 400. Not found" });
  }
});

module.exports = router;
