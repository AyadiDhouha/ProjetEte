import React, { Component } from 'react'
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import axios from "axios"
export class ficheMalade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      age: '',
      adresse: '',
      tel: '',
      etat: '',
      lastNameError: false,
      firstNameError: false,
      ageError: false,
      adresseError: false,
      telError: false,
      etatError: false,
      pathError: false,
      cardioError: false,
      troubleError: false,
      diabeteError: false,
      htaError: false,
      insuffError: false,
      retiError: false,
      atcdError: false,
      grossesseError: false,
      immunoError: false,
      tabagismeError: false,
      alcoolError: false,
      drogueError: false,
      path: '',
      cardio: '',
      trouble: '',
      diabete: '',
      hta: '',
      insuff: '',
      reti: '',
      atcd: '',
      grossesse: '',
      immuno: '',
      anc_path: '',
      trait_path: '',
      anc_cardio: '',
      trait_cardio: '',
      anc_trouble: '',
      trait_trouble: '',
      anc_diabete: '',
      trait_diabete: '',
      anc_hta: '',
      trait_hta: '',
      anc_insuff: '',
      trait_insuff: '',
      anc_reti: '',
      trait_reti: '',
      info_atcd: '',
      info_grossesse: '',
      anc_immuno: '',
      trait_immuno: '',
      tabagisme: '',
      alcool: '',
      drogue: '',
      taille: '',
      poids: ''
    }
    this.validateForm = this.validateForm.bind(this);
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  ;

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };


  validateForm = e => {
    const lastName = this.state.lastName;
    const firstName = this.state.firstName;
    const age = this.state.age;
    const adresse = this.state.adresse;
    const tel = this.state.tel;
    const etat = this.state.etat;
    const path = this.state.path;
    const anc_path = this.state.anc_path;
    const trait_path = this.state.trait_path;
    const cardio = this.state.cardio;
    const anc_cardio = this.state.anc_cardio;
    const trait_cardio = this.state.trait_cardio;
    const trouble = this.state.trouble;
    const anc_trouble = this.state.anc_trouble;
    const trait_trouble = this.state.trait_trouble;
    const diabete = this.state.diabete;
    const anc_diabete = this.state.anc_diabete;
    const trait_diabete = this.state.trait_diabete;
    const hta = this.state.hta;
    const anc_hta = this.state.anc_hta;
    const trait_hta = this.state.trait_hta;
    const insuff = this.state.insuff;
    const anc_insuff = this.state.anc_insuff;
    const trait_insuff = this.state.trait_insuff;
    const reti = this.state.reti;
    const anc_reti = this.state.anc_reti;
    const trait_reti = this.state.trait_reti;
    const atcd = this.state.atcd;
    const info_atcd = this.state.info_atcd;
    const grossesse = this.state.grossesse;
    const info_grossesse = this.state.info_grossesse;
    const immuno = this.state.immuno;
    const anc_immuno = this.state.anc_immuno;
    const trait_immuno = this.state.trait_immuno;
    const tabagisme = this.state.tabagisme;
    const alcool = this.state.alcool;
    const drogue = this.state.drogue;
    const taille = this.state.taille;
    const poids = this.state.poids;


    if (lastName) {
      this.setState({ lastNameError: false })

    } else {
      this.setState({ lastNameError: true })
    }
    if (firstName) {
      this.setState({ firstNameError: false })

    } else {
      this.setState({ firstNameError: true })
    }
    if (age) {
      this.setState({ ageError: false })

    } else {
      this.setState({ ageError: true })
    } if (adresse) {
      this.setState({ adresseError: false })

    } else {
      this.setState({ adresseError: true })
    }
    if (tel) {
      this.setState({ telError: false })

    } else {
      this.setState({ telError: true })
    }
    if (etat) {
      this.setState({ etatError: false })

    } else {
      this.setState({ etatError: true })
    }
    if (path) {
      this.setState({ pathError: false })


    } else {
      this.setState({ pathError: true })
    } if (cardio) {
      this.setState({ cardioError: false })

    } else {
      this.setState({ cardioError: true })
    }
    if (trouble) {
      this.setState({ troubleError: false })

    } else {
      this.setState({ troubleError: true })
    }
    if (diabete) {
      this.setState({ diabeteError: false })

    } else {
      this.setState({ diabeteError: true })
    }
    if (hta) {
      this.setState({ htaError: false })

    } else {
      this.setState({ htaError: true })
    }
    if (insuff) {
      this.setState({ insuffError: false })

    } else {
      this.setState({ insuffError: true })
    }
    if (reti) {
      this.setState({ retiError: false })

    } else {
      this.setState({ retiError: true })
    }
    if (atcd) {
      this.setState({ atcdError: false })

    } else {
      this.setState({ atcdError: true })
    }
    if (grossesse) {
      this.setState({ grossesseError: false })

    } else {
      this.setState({ grossesseError: true })
    }
    if (immuno) {
      this.setState({ immunoError: false })

    } else {
      this.setState({ immunoError: true })
    }
    if (tabagisme) {
      this.setState({ tabagismeError: false })

    } else {
      this.setState({ tabagismeError: true })
    } if (alcool) {
      this.setState({ alcoolError: false })

    } else {
      this.setState({ alcoolError: true })
    }
    if (drogue) {
      this.setState({ drogueError: false })

    } else {
      this.setState({ drogueError: true })
    }
    var patientFormData = {
      lastName: lastName,
      firstName: firstName,
      age: age,
      adresse: adresse,
      tel: tel,
      etat: etat,
      path: path,
      cardio: cardio,
      trouble: trouble,
      diabete: diabete,
      hta: hta,
      insuff: insuff,
      reti: reti,
      atcd: atcd,
      grossesse: grossesse,
      immuno: immuno,
      anc_path: anc_path,
      trait_path: trait_path,
      anc_cardio: anc_cardio,
      trait_cardio: trait_cardio,
      anc_trouble: anc_trouble,
      trait_trouble: trait_trouble,
      anc_diabete: anc_diabete,
      trait_diabete: trait_diabete,
      anc_hta: anc_hta,
      trait_hta: trait_hta,
      anc_insuff: anc_insuff,
      trait_insuff: trait_insuff,
      anc_reti: anc_reti,
      trait_reti: trait_reti,
      info_atcd: info_atcd,
      info_grossesse,
      anc_immuno: anc_immuno,
      trait_immuno: trait_immuno,
      tabagisme: tabagisme,
      alcool: alcool,
      drogue: drogue,
      taille: taille,
      poids: poids,

    }
    console.log('.......', patientFormData);
    axios.post('/addPatients', patientFormData ,
    {
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
  })

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)

      });
  }
  // Handle fields change
  handleChange = input => e => {
    //const value = e.target.value
    this.setState({ [input]: e.target.value });
    // console.log('.....value...', value)
  };


  render() {
    const { step } = this.state;
    const { lastName, firstName, age, adresse, tel, etat, path,
      cardio,
      trouble,
      diabete,
      hta,
      insuff,
      reti,
      atcd,
      grossesse,
      immuno,
      anc_path,
      trait_path,
      anc_cardio,
      trait_cardio,
      anc_trouble,
      trait_trouble,
      anc_diabete,
      trait_diabete,
      anc_hta,
      trait_hta,
      anc_insuff,
      trait_insuff,
      anc_reti,
      trait_reti,
      info_atcd,
      info_grossesse,
      anc_immuno,
      trait_immuno,
      tabagisme,
      alcool,
      drogue,
      poids,
      taille } = this.state;

    const values = {
      lastName, firstName, age, adresse, tel, etat, path,
      cardio,
      trouble,
      diabete,
      hta,
      insuff,
      reti,
      atcd,
      grossesse,
      immuno,
      anc_path,
      trait_path,
      anc_cardio,
      trait_cardio,
      anc_trouble,
      trait_trouble,
      anc_diabete,
      trait_diabete,
      anc_hta,
      trait_hta,
      anc_insuff,
      trait_insuff,
      anc_reti,
      trait_reti,
      info_atcd,
      info_grossesse,
      anc_immuno,
      trait_immuno,
      tabagisme,
      alcool,
      drogue,
      poids,
      taille
    };

    switch (step) {
      case 1:
        return (

          <FirstPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />

        );
      case 2:
        return (
          <SecondPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}

          />
        );

      case 3:
        return (
          <ThirdPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            validateForm={this.validateForm}

          />
        );


    }
  }
}


export default ficheMalade