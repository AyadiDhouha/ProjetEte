import React, { Component } from 'react'
import './FicheMalade.css'
import Button from '@material-ui/core/Button';

export class FirstPage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;


        return (
            <>
                <div className="body">
                    <div className="regform">
                        <h1>Fiche Malade</h1>
                    </div>
                    <div className="main">
                        <h2 className="title1">1-Information générales</h2>

                        <div id="name">
                            <h2 className="title">Nom et prenom</h2>
                            <input className="lastname" type="text" style={{ border: (values.lastNameError) ? "3px solid red" : '' }} name="last_name" onChange={handleChange('lastName')} defaultValue={values.lastName}
                            />
                            <label className="lastlabel">Nom</label>
                            <input className="firstname" type="text" name="first_name" onChange={handleChange('firstName')} defaultValue={values.firstName} />
                            <label className="firstlabel">Prenom</label>
                        </div>

                        <div id="name">
                            <h2 className="title">Date de Naissance</h2>
                            <input type="date" className="date" onChange={handleChange('age')} defaultValue={values.age}
                            />

                        </div>

                        <div id="name">
                            <h2 className="title">Adresse</h2>
                            <input className="adresse" type="text" name="adresse" onChange={handleChange('adresse')} defaultValue={values.adresse} />
                        </div>

                        <div id="name">
                            <h2 className="title">Numero de telephone</h2>
                            <input className="number" type="tel" name="tel" onChange={handleChange('tel')} defaultValue={values.tel} />
                        </div>
                        <div id="name">

                            <h2 className="title">Marié(e)</h2>

                            <label className="radio">
                                <input type="radio" value="oui" checked={values.etat === "oui"} onChange={handleChange('etat')} />
                                <span className="checkmark"></span>
                                Oui
                            </label>
                            <label className="radio">
                                <input type="radio" value="non" checked={values.etat === "non"} onChange={handleChange('etat')} />
                                <span className="checkmark"></span>
                                Non
                            </label>
                            <label className="radio">
                                <input type="radio" value="autre" checked={values.etat === "autre"} onChange={handleChange('etat')} />
                                <span className="checkmark"></span>
                                Autre
                            </label>
                        </div>

                        <Button
                            className="cont"
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>

                    </div>
                </div>
            </>
        )
    }
}

export default FirstPage