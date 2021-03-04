  const {
      Account
  } = require('../models');
  const bcrypt = require('bcrypt');
  const validator = require('email-validator');

  const accountController = {
      handleLoginForm: async (req, res) => {
          try {
              //on cherche à identifier le user à partir de son email
              const email = req.body.email;
              const account = await Account.findOne({
                  where: {
                      email
                  }
              })

              //si aucun user touvé avec cet email => message d'erreur
              if (!account) {
                  return res.json({
                      error: 'Email ou mot de passe incorrect'
                  });
              }


              //le user avec cet email existe, on vérifie son mot de passe en comparant :
              //- la version en clair saisie dans le formulaire
              //- la version hachée stockée en BDD
              //bcrypt est capable de déterminer si les 2 version du mot de passe correcpondent
              const validPwd = bcrypt.compareSync(req.body.password, user.password);

              if (!validPwd) {
                  //la vérification a échoué, on envoie un message d'erreur
                  return res.json({
                      error: 'Email ou mot de passe incorrect'
                  });
              }


              //le user existe et s'est correctement identifié, on stocke les infos qui vont bien dans la session

              req.session.user = {
                  firstname: account.firstname,
                  lastname: account.lastname,
                  email: account.email,
                  role: account.role
              };

              if (req.body.remember) {
                  //l'utilisateur a coché la case 'se souvenir de moi'
                  //on ajoute une heiure de validité à sa session
                  request.session.cookie.expires = new Date(Date.now() + 3600000);
              }

              response.redirect('/');
          } catch (error) {
              console.log(error);
          }

      },

      handleSignupForm: async (req, res) => {
          try {

              //on checke si un utilisateur existe déjà avec cet email
              const account = await Account.findOne({
                  where: {
                      email: req.body.email
                  }
              });
              if (account) {
                  //il y a déjà un utilisateur avec cet email, on envoie une erreur
                  return res.status(401).json({
                      error: 'Un utilisateur avec cet email existe déjà'
                  });
              }
              //on rechecke que l'email a un format valide
              if (!validator.validate(req.body.email)) {
                  //le format de l'email est incorrect
                  return res.status(401).json({
                      error: 'Le format de l\'email est incorrect'
                  });
              }
              //on checke si le password et la vérif sont bien identiques
              if (req.body.password !== req.body.passwordConfirm) {
                  return res.status(401).json({
                      error: 'La confirmation du mot de passe est incorrecte'
                  });
              }
              //on hache le password
              const hashedPwd = bcrypt.hashSync(req.body.password, 10)

              //on inscrit le nouveau compte en BDD

              await Account.create({
                  email: req.body.email,
                  password: hashedPwd,
                  last_name: req.body.last_name,
                  first_name: req.body.first_name,
                  phone_number: req.body.phone_number
              });
              res.status(201);
          } catch (error) {
              console.log(error);
          }
      },

      logout: (request, response) => {
          //on reset des infos du user en session
          request.session.user = false;
          //on redirige sur la page d'accueil
          response.redirect('/');
      }
  };

  module.exports = accountController