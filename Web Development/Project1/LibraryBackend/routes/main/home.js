
module.exports = function(app){

  app.route("/home")

    .get(function(req,res){

      const data = {

        title: "Home Page",
        heading: "KEC Library",
        subHeading: "Open online",
        imgUrl: "https://library.leeds.ac.uk/site/custom_scripts/image.php?w=800&h=400&filename=800x400_laptop_graphic.jpg",
        content: "Our online enquiries are open Monday–Saturday, 9am–5pm – just ask, we’ll do our best to help you.See our top tips to access eresources and our additional eresources blog.<br><br>Our Skills@Library workshops are available online.<br><br> Book a one-to-one appointment for skills or maths support.<br><br>Contact Research Support and Data Management Teams online for enquiries and appointments.<br><br> Book onto an online workshop."

      };

      res.json(data);

    });

}
