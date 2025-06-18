import React, { useEffect, useState } from 'react';
import UserSettings from './UserSettings';
import { fetchItem, saveItem, saveItemImageForm } from '../../../../hooks/useCrud';
import { getUser } from '../../../../api/storage';
import { fileUrl } from '../../../../api/config';
import TextField from '../../../../components/TextField';
import ComboBoxField from '../../../../components/ComboBox';
import SelectPickerField from '../../../../components/SelectPickerField';
import { showError } from '../../../../api/callApi';

interface UserData {
    id?: number;
    name?: string;
    email?: string;
    idRole?: string;
    telephone?: string;
    avatar?: string;
    sexe?: string;
    role?: any;
    passwords?: string;
    newspasswords?: string;
    confirmpasswords?: string,
    logoFile?: File;

}

export default function UserProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [datas, setDatas] = useState<UserData[]>([]);
    const [formData, setFormData] = useState<Partial<UserData>>({
        name: 'Roger Sumaili',
        email: 'sumailiroger681@gmail.com',
        avatar: 'default.png',
        role: 'Développeur Fullstack',
        telephone: '+243 817 883 541',
        sexe: 'Homme',
        idRole: 'ADMIN001',
        passwords: "123456",
        newspasswords: "12345678",
        confirmpasswords: "12345678",
    });

    const SexeOptions = [
        { value: 'M', label: 'Homme' },
        { value: 'F', label: 'Femme' },
    ];
    const [selectedSexe, setSelectedSexe] = useState<{ value: any; label: string } | null>(null);


    const [activeTab, setActiveTab] = useState('profile');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // actions 

    const user = getUser();
    const fetchConnected = async () => {
        const id = user?.id;
        const data = await fetchItem<UserData>('/fetch_single_user', id);
        // console.log("data:" + JSON.stringify(data));
        setFormData(data);
        setIsEditing(true);


    }

    useEffect(() => {
        fetchConnected();
    }, []);

    const handEditForm = async () => {
        const id = user?.id;
        if (activeTab === 'profile') {
            // alert("profile");
            if (formData.name != '' && formData.email != ''
                && formData.telephone != '' && formData.sexe != '') {

                editInfoProfilCOnnected();
            }
            else {
                showError("Veillez saisir tous les champs!!!");
            }

        }
        else if (activeTab === 'settings') {
            alert("settings");
        }
        else if (activeTab === 'avatar') {
            // alert("avatar");
            handleSubmitImage();
        }
        else if (activeTab === 'password') {
            // alert("password");
            if (formData.newspasswords != '' && formData.confirmpasswords != '') {

                if (formData.newspasswords == formData.confirmpasswords) {

                    editPasswordUserConnected();
                }
                else {
                    showError("Les deux mot de passe doivent être identique!!!");
                }


            }
            else {
                showError("Veillez saisir tous les champs!!!");
            }

        }
        else {
            alert("Desole!!!");
        }
    }

    const editInfoProfilCOnnected = async () => {
        // console.log("id:" + formData.id);
        await saveItem('/editUserProfil', formData);
        fetchConnected();

    }

    const editPasswordUserConnected = async () => {
        // console.log("id:" + formData.id);
        await saveItem('/editUserPassword', formData);
        fetchConnected();

    }

    /*
      *
      *==========================
      * Utilisation de l'image
      *==========================
      *
      */

    const [preview, setPreview] = useState<string | null>(null);

    const handleInputChangeImage = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === 'logo' && files && files[0]) {
            const file = files[0]; // ✅ Déclaration correcte

            setFormData((prev) => ({
                ...prev,
                logoFile: file,
            }));

            setPreview(URL.createObjectURL(file)); // ✅ Utilisation correcte de `file`
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmitImage = async () => {

        const formDataToSend = new FormData();
        formDataToSend.append('id', String(formData.id ?? 0)); // converti id en string
        if (formData.logoFile) {
            formDataToSend.append('avatar', formData.logoFile);

            await saveItemImageForm('/edit_avatar', formDataToSend);
            fetchConnected();
        }

      

       



    };

    /*
    *
    *==========================
    * Utilisation de l'image
    *==========================
    *
    */

    return (
        <div className="mt-4 rounded border shadow-sm  text-dark">
            {/* Banner */}
            <div className="position-relative">
                <div className="bg-dark" style={{ height: '120px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}></div>

                {/* Avatar */}
                <div className="d-flex align-content-center justify-content-center  top-50 start-100  translate-middle" style={{ zIndex: 10, marginTop: -30 }}>
                    <img
                        src={`${fileUrl}/images/${formData.avatar}`}
                        alt="Avatar"
                        className="rounded-circle border border-white"
                        width="120"
                        height="120"
                    />
                </div>
            </div>

            <div className="text-center mt-2">

                <h4 className="mb-0">{formData.name}</h4>
                <p className="text-muted mb-1">{formData.email}</p>
                <p className="text-primary">{formData.role?.nom}</p>
                <button className="btn btn-outline-primary btn-sm mb-3" onClick={handEditForm}>
                    <i className="fas fa-pen"></i> Modifier le profil
                </button>
            </div>

            {/* Tabs */}
            <ul className="nav nav-tabs justify-content-center mb-3">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <i className="fas fa-user me-1"></i> Profil
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <i className="fas fa-cog me-1"></i> Paramètres
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'avatar' ? 'active' : ''}`}
                        onClick={() => setActiveTab('avatar')}
                    >
                        <i className="fas fa-image me-1"></i> Avatar
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'password' ? 'active' : ''}`}
                        onClick={() => setActiveTab('password')}
                    >
                        <i className="fas fa-lock me-1"></i> Mot de passe
                    </button>
                </li>
            </ul>

            {/* Tab content */}
            <div className="p-3">
                {activeTab === 'profile' && (
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mb-0">

                                        <TextField
                                            name="name"
                                            value={formData.name || ''}
                                            onChange={handleInputChange}
                                            placeholder="Nom"
                                            label="Nom"
                                            icon="fas fa-user-tag"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-0">
                                        <TextField
                                            type='email'
                                            name="email"
                                            value={formData.email || ''}
                                            onChange={handleInputChange}
                                            placeholder="Email"
                                            label="Email"
                                            icon="fas fa-envelope"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-0">
                                        <TextField
                                            name="telephone"
                                            value={formData.telephone || ''}
                                            onChange={handleInputChange}
                                            placeholder="N° de téléphone"
                                            label="Nom"
                                            icon="fas fa-phone"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-0">
                                        {/* <ComboBoxField
                                            name="sexe"
                                            value={formData.sexe || ''}
                                            onChange={handleInputChange}
                                            label="Sexe"
                                            icon="fas fa-venus-mars"
                                            options={[
                                                { value: 'M', label: 'Homme' },
                                                { value: 'F', label: 'Femme' }
                                            ]}
                                        /> */}

                                        <SelectPickerField
                                            name="sexe"
                                            value={formData.sexe || ''}
                                            onChange={(value) => setFormData({ ...formData, sexe: value })}
                                            options={SexeOptions}
                                            label="Sexe"
                                            icon="fas fa-venus-mars"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div>

                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <UserSettings />

                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>



                    </div>

                )}

                {activeTab === 'avatar' && (

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <p>Changer l’image de profil</p>
                                        <input
                                            type="file"
                                            name="logo"
                                            id="logo"
                                            className='form-control'
                                            onChange={handleInputChangeImage}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        {/* affichage de l'image selectionnée */}
                                        <img src={preview || fileUrl + '/images/' + formData.avatar}
                                            alt="image sélectionnée" className='img img-thumbnail col-md-6' width={50} height={50} />


                                    </div>

                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>



                )}

                {activeTab === 'password' && (

                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12 mb-0">

                                        <TextField
                                            name="passwords"
                                            value={formData.passwords || ''}
                                            onChange={handleInputChange}
                                            placeholder="Ancien mot de passe"
                                            label="Ancien mot de passe"
                                            icon="fas fa-key"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-0">

                                        <TextField
                                            name="newspasswords"
                                            value={formData.newspasswords || ''}
                                            onChange={handleInputChange}
                                            placeholder="nouveau mot de passe"
                                            label="nouveau mot de passe"
                                            icon="fas fa-lock"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-0">
                                        <TextField
                                            name="confirmpasswords"
                                            value={formData.confirmpasswords || ''}
                                            onChange={handleInputChange}
                                            placeholder="Confirmer le nouveau mot de passe"
                                            label="Confirmer le nouveau mot de passe"
                                            icon="fas fa-lock"
                                            required
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}
