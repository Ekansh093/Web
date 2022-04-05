
module.exports = function(app){

  app.route("/contact")

    .get(function(req,res){

      const data = {

        title: "Contact Us",
        heading: "24x7 Help, Contact Us on our helpline number",
        phone: "+91- 8811223344",
        card: [
          {
              title: "AskUs can help you with",
              content: "Each school, institute, centre or faculty has a dedicated Liaison Librarian who provides advice and services to support you."
          },
          {
             title: "Contact your Librarian",
             content: "Each school, institute, centre or faculty has a dedicated Liaison Librarian who provides advice and services to support you."
          }
        ]
      };

      res.json(data);

    });

}
