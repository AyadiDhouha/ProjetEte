import React, { Component } from 'react'
import './FicheMalade.css'
import Button from '@material-ui/core/Button';

export class ThirdPage extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange, validateForm } = this.props;

        return (
            <>
                <div className="body">
                    <div className="regform">
                        <h1>Fiche Malade</h1>
                    </div>
                    <div className="main3">
                        <h2 className="title1">3-Habitudes de vie</h2>
                        <div id="name1">
                            <h4 className="title">Tabagisme</h4>
                            <label className="radio1">
                                <input type="radio" value="oui" checked={values.tabagisme === "oui"} onChange={handleChange('tabagisme')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio2">
                                <input type="radio" value="non" checked={values.tabagisme === "non"} onChange={handleChange('tabagisme')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />
                        </div>

                        <div id="name1">
                            <h4 className="title">Alcool</h4>
                            <div className="title22">

                                <p>Taille<input type="text" onChange={handleChange('taille')} defaultValue={values.taille} /></p><br />
                            </div>
                            <p className="traitement2">Poids<input type="text" onChange={handleChange('poids')} defaultValue={values.poids} /> </p>

                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.alcool === "oui"} onChange={handleChange('alcool')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.alcool === "non"} onChange={handleChange('alcool')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />

                        </div>

                        <div id="name1">
                            <h4 className="title">Consommation de drogues</h4>
                            <label className="radio1">
                                <input type="radio" value="oui" checked={values.drogue === "oui"} onChange={handleChange('drogue')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio2">
                                <input type="radio" value="non" checked={values.drogue === "non"} onChange={handleChange('drogue')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />
                        </div>

                        <Button
                            className="back"
                            color="secondary"
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>

                        <Button
                            className="continue"
                            color="primary"
                            variant="contained"
                           
                            onClick={validateForm}

                        >Continue</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default ThirdPage