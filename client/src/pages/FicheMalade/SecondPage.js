import React, { Component } from 'react'
import './FicheMalade.css'
import Button from '@material-ui/core/Button';

export class SecondPage extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <div className="body2">
                    <div className="regform">
                        <h1>Fiche Malade</h1>
                    </div>
                    <div className="main2">
                        <h2 className="title1">2-Antécédents médicaux du cas(pathologie chronique/immunodépression)</h2>

                        <div id="name1">

                            <h4 className="title">Pathologie respiratoire chronique</h4>
                            <div className="title22">
                                <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_path')} defaultValue={values.anc_path} /> ans</p><br />
                            </div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_path')} defaultValue={values.trait_path} /> </p>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.path === "oui"} onChange={handleChange('path')} />
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.path === "non"} onChange={handleChange('path')} />

                                <span className="checkmark"></span>
                                Non
                            </label><br />

                        </div>


                        <div id="name1">
                            <h4 className="title">Cardiopathies</h4>
                            <div className="title22">
                                <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_cardio')} defaultValue={values.anc_cardio} /> ans</p><br />
                            </div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_cardio')} defaultValue={values.trait_cardio} /> </p>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.cardio === "oui"} onChange={handleChange('cardio')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.cardio === "non"} onChange={handleChange('cardio')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />

                        </div>

                        <h4 className="title">Troubles du rythme cardiaque</h4>
                        <div className="title22">
                            <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_trouble')} defaultValue={values.anc_trouble} /> ans</p><br /></div>
                        <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_trouble')} defaultValue={values.trait_trouble} /> </p>
                        <label className="radio11">
                            <input type="radio" value="oui" checked={values.trouble === "oui"} onChange={handleChange('trouble')} />
                            <span className="checkmark"></span>
                            Oui
                        </label><br />
                        <label className="radio22">
                            <input type="radio" value="non" checked={values.trouble === "non"} onChange={handleChange('trouble')} />
                            <span className="checkmark"></span>
                            Non
                        </label><br />



                        <div id="name1">
                            <h4 className="title">Diabète</h4>
                            <div className="title22">
                                <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_diabete')} defaultValue={values.anc_diabete} /> ans</p><br /></div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_diabete')} defaultValue={values.trait_diabete} /> </p>
                        </div>

                        <label className="radio11">
                            <input type="radio" value="oui" checked={values.diabete === "oui"} onChange={handleChange('diabete')} />
                            <span className="checkmark"></span>
                            Oui
                        </label><br />
                        <label className="radio22">
                            <input type="radio" value="non" checked={values.diabete === "non"} onChange={handleChange('diabete')} />
                            <span className="checkmark"></span>
                            Non
                        </label><br />

                        <div id="name1">
                            <h4 className="title">HTA</h4>
                            <div className="title22">
                                <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_hta')} defaultValue={values.anc_hta} /> ans</p><br /></div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_hta')} defaultValue={values.trait_hta} /> </p>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.hta === "oui"} onChange={handleChange('hta')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.hta === "non"} onChange={handleChange('hta')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />

                        </div>

                        <div id="name1">
                            <h4 className="title">Insuffisance rénale chronique</h4>
                            <div className="title22">
                                <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_insuff')} defaultValue={values.anc_insuff} /> ans</p><br /></div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_insuff')} defaultValue={values.trait} /> </p>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.insuff === "oui"} onChange={handleChange('insuff')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.insuff === "non"} onChange={handleChange('insuff')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />

                        </div>

                        <div id="name1">
                            <h4 className="title">Rétinopathie</h4>
                            <div className="title22">
                                <p>si oui,ancienneté <input type="text" onChange={handleChange('anc_reti')} defaultValue={values.anc_reti} /> ans</p><br /></div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_reti')} defaultValue={values.trait_reti} /> </p>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.reti === "oui"} onChange={handleChange('reti')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.reti === "non"} onChange={handleChange('reti')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />

                        </div>

                        <div id="name1">
                            <h4 className="title">ATCD chirurgicaux</h4>
                            <div className="title22">
                                <p>si oui,precisez <input type="text" onChange={handleChange('info_atcd')} defaultValue={values.info_atcd} /> </p><br /></div>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.atcd === "oui"} onChange={handleChange('atcd')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.atcd === "non"} onChange={handleChange('atcd')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />
                        </div>
                        <div id="name1">
                            <h4 className="title">Grossesse en cours</h4>
                            <div className="title22">
                                <p>si oui,precisez <input type="text" onChange={handleChange('info_grossesse')} defaultValue={values.info_grossesse} /> </p><br /></div>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.grossesse === "oui"} onChange={handleChange('grossesse')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.grossesse === "non"} onChange={handleChange('grossesse')} />
                                <span className="checkmark"></span>
                                Non
                            </label><br />
                        </div>
                     

                        <div id="name1">
                            <h4 className="title">Traitement immunosuppresseur (corticoides, chimiothérapie...)</h4>
                            <div className="title22">
                                <p>si oui,précisez la date <input type="text" onChange={handleChange('anc_immuno')} defaultValue={values.anc_immuno} /></p><br /></div>
                            <p className="traitement2">traitement <input type="text" onChange={handleChange('trait_immuno')} defaultValue={values.trait_immuno} /> </p>
                            <label className="radio11">
                                <input type="radio" value="oui" checked={values.immuno === "oui"} onChange={handleChange('immuno')} />
                                <span className="checkmark"></span>
                                Oui
                            </label><br />
                            <label className="radio22">
                                <input type="radio" value="non" checked={values.immuno === "non"} onChange={handleChange('immuno')} />
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
                            onClick={this.continue}
                        >Continue</Button>
                    </div>
                </div>

            </>
        );
    }
}
export default SecondPage