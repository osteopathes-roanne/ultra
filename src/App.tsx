import React from 'react';
import {Menu, X, Mail, Phone, MapPin, Clock, Building, Key, Currency, DollarSign, Euro} from 'lucide-react';
import {useState} from 'react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-brand-blue/10">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-display text-gray-900">Cabinet d'Ostéopathie</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            {['accueil', 'Vos ostéopathes', 'infos', 'Pour qui ?', 'Pour quoi ?', 'faq'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['accueil', 'Vos ostéopathes',  'infos','Pour qui ?', 'Pour quoi ?', 'faq'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Header */}
            <section id="accueil" className="pt-32 pb-20 relative overflow-hidden">
                <div
                    className="section-shape section-shape-blue absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
                <div
                    className="section-shape section-shape-green absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-center leading-snug">
                        Cabinet d'Ostéopathie<br/>de Morann DURAND &amp; Phèdre PETELET
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center">
                        Un cadre moderne et facilement accessible à Roanne, pour une prise en charge sur mesure
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="https://user.clicrdv.com/morann-durand"
                            className="btn btn-secondary text-lg py-3 px-8"
                        >
                            RDV avec Morann Durand
                        </a>
                        <a
                            href="https://www.doctolib.fr/osteopathe/roanne/phedre-petelet-roanne"
                            className="btn btn-primary text-lg py-3 px-8"
                        >
                            RDV avec Phèdre Petelet
                        </a>
                    </div>
                </div>
            </section>

            {/* Vos ostéopathes */}
            <section id="Vos ostéopathes" className="py-20 bg-brand-blue/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
                        Vos ostéopathes
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                name: "Morann DURAND",
                                image: "./durand.png",
                                description:
                                    "Diplômé du CEESO Lyon en 2015, j’ai approfondi mes compétences avec un D.U. en Soins d’urgences en milieu sportif et je me forme régulièrement pour continuer à améliorer la prise en charge de mes patients. Je mets mon expérience au service de mes patients, en adaptant ma prise en charge selon les motifs de consultation. \n" +
                                    "Formé en gestes et posture, j’accompagne également les entreprises et leurs collaborateurs dans la prévention des troubles musculo-squelettiques (TMS) dans le but de préserver le bien-être au travail."
                            },
                            {
                                name: "Phèdre PETELET",
                                image: "./phedre.jpeg",
                                description:
                                    "Diplômée du CEESO Lyon en 2024, j’accompagne des patients de tous âges, des nourrissons aux séniors, en adaptant mes soins aux besoins spécifiques de chacun. Je prends le temps d’expliquer chaque geste afin que mes patients comprennent pleinement leur traitement. Attachée à une pratique éthique et actualisée, je me tiens informée en continu des avancées scientifiques. Pour les personnes ayant des difficultés à se déplacer, je propose également des consultations à domicile."
                            }
                        ].map((osteo, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg text-center p-6">
                                <img
                                    src={osteo.image}
                                    alt={osteo.name}
                                    className="w-40 h-40 object-cover rounded-full mx-auto mt-4 shadow-md"
                                />
                                <h3 className="text-2xl font-display font-semibold text-gray-900 mt-4">
                                    {osteo.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">Ostéopathe D.O.</p>
                                <p className="text-gray-600 mt-2 text-justify">{osteo.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Informations pratiques */}
            <section id="infos" className="py-20 bg-brand-blue/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
                        Informations Pratiques
                    </h2>

                    {/* Première rangée : Horaires et Adresse */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Horaires */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                            <Clock className="w-8 h-8 text-[#C1DCEF] mb-4"/>
                            <h3 className="text-2xl font-display font-semibold mb-4">Horaires</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="font-semibold text-lg">Lundi - Vendredi : 8h - 20h</li>
                                <li className="font-semibold text-lg">Samedi : 9h - 13h</li>
                            </ul>
                            <p className="text-gray-600 mt-4" style={{textAlign: 'justify'}}>
                                Pour correspondre au mieux à votre emploi du temps, nous avons aménagé une large plage
                                horaire. En nous relayant, nous nous efforçons de vous proposer des rendez-vous
                                rapidement et avec plus de flexibilité.
                            </p>
                        </div>

                        {/* Tarifs des consultations */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                            <Euro className="w-8 h-8 text-[#C7DFD1] mb-4"/>
                            <h3 className="text-2xl font-display font-semibold mb-4">Tarifs des consultations</h3>
                            <p className="text-gray-600 text-lg mb-4">
                                Consultation standard : <span className="font-semibold">60€</span><br/>
                                Consultation à domicile : <span className="font-semibold">70€</span><br/>
                                Partenariats (entreprises, clubs sportifs) : <span className="font-semibold">50€</span>
                            </p>
                            <p className="text-gray-600" style={{textAlign: 'justify'}}>
                                * renseignez vous auprès de votre mutuelle pour remboursement
                            </p>
                        </div>

                        {/* Adresse avec carte et informations supplémentaires */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Colonne gauche : adresse et infos */}
                                <div>
                                    <MapPin className="w-8 h-8 text-[#C1DCEF] mb-4"/>
                                    <h3 className="text-2xl font-display font-semibold mb-4">Adresse</h3>
                                    <p className="text-gray-600 text-center text-lg mb-4">
                                        Bâtiment L'Ultra<br/>
                                        164 Rue de Charlieu,<br/>
                                        42300 Roanne<br/>
                                        France
                                    </p>
                                    <ul className="text-gray-600 mb-4 list-disc list-inside">
                                        <li className="font-semibold">1er étage avec ascenseur</li>
                                        <li className="font-semibold">Parking gratuit</li>
                                        <li className="font-semibold">Accès facile via la voie rapide</li>
                                        <li className="font-semibold">Établissement climatisé</li>
                                    </ul>
                                </div>
                                {/* Colonne droite : carte */}
                                <div>
                                    <div className="w-full h-full">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.2567963238781!2d4.084121928621803!3d46.0505559981856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f40f59879a5ab9%3A0x2b751572394a2ab8!2sPh%C3%A8dre%20PETELET%20EI%20-%20Ost%C3%A9opathe%20D.O.%20-%20Roanne!5e0!3m2!1sen!2sfr!4v1743537403585!5m2!1sen!2sfr"
                                            width="100%"
                                            height="100%"
                                            style={{border: 0}}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Nouvelle card : Notre Établissement en pleine largeur */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                            <Building className="w-8 h-8 text-[#C7DFD1] mb-4"/>
                            <h3 className="text-2xl font-display font-semibold mb-4">Notre Établissement</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                {[
                                    {src: "./batiment.jpg", alt: "Bâtiment L'Ultra", label: "Bâtiment L'Ultra"},
                                    {src: "./salle.jpg", alt: "Salle de Consultation", label: "Salle de Consultation"},
                                    {src: "./attente.jpg", alt: "Salle d'attente", label: "Salle d'attente"},
                                    {src: "./sale2.jpg", alt: "Salle de console", label: "2e Salle de Consultation"}
                                ].map((item, index) => (
                                    <div key={index}>
                                        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-center mt-2 text-gray-600">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* Deuxième rangée : Contacts individuels */}
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Contact Morann */}
                        <div className="bg-[#C7DFD1] rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-display font-semibold mb-4">Morann Durand</h3>
                            <div className="flex items-center gap-2">
                                <Phone className="w-6 h-6"/>
                                <a href="tel:0681411957" className="text-gray-900 hover:underline">
                                    06 81 41 19 57
                                </a>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <Mail className="w-6 h-6"/>
                                <a
                                    href="mailto:morann.durand.osteo@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    morann.durand.osteo@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Contact Phèdre */}
                        <div className="bg-[#C1DCEF] rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-display font-semibold mb-4">Phèdre Petelet</h3>
                            <div className="flex items-center gap-2">
                                <Phone className="w-6 h-6"/>
                                <a href="tel:0769772380" className="text-gray-900 hover:underline">
                                    07 69 77 23 80
                                </a>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <Mail className="w-6 h-6"/>
                                <a
                                    href="mailto:phedre.petelet.osteo@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    phedre.petelet.osteo@gmail.com
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

            </section>


            {/* À qui s'adresse l'ostéopathie */}
            <section id="Pour qui ?" className="py-20 bg-brand-green/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
                        À qui s'adresse l'ostéopathie ?
                    </h2>
                    <div className="flex justify-center items-center gap-6 overflow-x-auto">
                        {[
                            {
                                title: "Nourrissons",
                                image:
                                    "https://www.etiopathe-debreil.fr/photos/shutterstock_352385927.jpg"
                            },
                            {
                                title: "Enfants",
                                image:
                                    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=300"
                            },
                            {
                                title: "Adolescents",
                                image:
                                    "https://media.istockphoto.com/id/1278978403/fr/photo/amis-dadolescent-sasseyant-ensemble-et-riant.jpg?s=612x612&w=0&k=20&c=Xp2EaQH8-1JrnBSus33pOnxbfx-Bz4jjShil95LtxR4="
                            },
                            {
                                title: "Femmes enceintes",
                                image:
                                    "https://www.massotherapierepentigny.com/wp-content/uploads/2016/11/massage-femme-enceinte-qc.jpg"
                            },
                            {
                                title: "Sportifs",
                                image:
                                    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=300"
                            },
                            {
                                title: "Adultes",
                                image:
                                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
                            },
                            {
                                title: "Séniors",
                                image:
                                    "https://img.freepik.com/photos-gratuite/femme-senior-africaine-souriante-portrait-visage_53876-143107.jpg"
                            }
                        ].map((profile, index) => (
                            <div key={index} className="relative group flex-shrink-0 w-32 h-32">
                                <div className="w-full h-full rounded-2xl overflow-hidden">
                                    <img
                                        src={profile.image}
                                        alt={profile.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div
                                    className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent">
                                    <h3 className="text-white font-display font-medium text-sm mb-2">
                                        {profile.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Pourquoi consulter */}
            <section id="Pour quoi ?" className="py-20 bg-brand-green/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
                        Pourquoi Consulter ?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Troubles musculo-squelettiques (TMS)",
                                points: [
                                    "Lombalgie (douleur lombaire)",
                                    "Sciatalgie (douleur du nerf sciatique)",
                                    "Cervicalgie (douleur cervicale)",
                                    "Dorsalgie (douleur du haut du dos)",
                                    "Etc ..."
                                ]
                            },
                            {
                                title: "Troubles digestifs",
                                points: [
                                    "Ballonnements",
                                    "Constipation",
                                    "Reflux gastro-œsophagien (RGO)"
                                ]
                            },
                            {
                                title: "Nourrissons et enfants",
                                points: [
                                    "Troubles digestifs (coliques, constipation, reflux)",
                                    "Torticolis et plagiocéphalie (tête plate)",
                                    "Prévention et surveillance des troubles de la croissance"
                                ]
                            },
                            {
                                title: "Personnes âgées",
                                points: [
                                    "Maintien de la mobilité et souplesse articulaire",
                                    "Soulagement des douleurs chroniques liées à l'âge",
                                    "Amélioration de l'équilibre pour prévenir les chutes"
                                ]
                            },
                            {
                                title: "Prévention",
                                points: [
                                    "Réduction des tensions liées au stress",
                                    "Maintien de la mobilité",
                                    "Prévention de douleurs récurrentes"
                                ]
                            },
                            {
                                title: "Accompagnement de grossesse",
                                points: [
                                    "TMS liés à la grossesse",
                                    "Préparation à l'accouchement"
                                ]
                            },
                            {
                                title: "Maux de tête",
                                points: [
                                    "Migraines",
                                    "Céphalées de tension ou céphalées cervico-géniques"
                                ]
                            },
                            {
                                title: "Suivi des blessures",
                                points: [
                                    "Fractures",
                                    "Entorses",
                                    "Tendinites",
                                    "Post Chirurgies"
                                ]
                            },


                        ].map((card, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-display font-semibold mb-4">{card.title}</h3>
                                <ul className="text-gray-600 list-disc list-inside space-y-1">
                                    {card.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section id="faq" className="py-20 bg-brand-blue/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
                        Questions Fréquentes
                    </h2>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {[
                            {
                                question: "L'ostéopathie est-elle remboursée ?",
                                answer:
                                    "Les séances d'ostéopathie ne sont pas remboursées par la sécurité sociale. Cependant, de nombreuses mutuelles prennent en charge tout ou partie des frais. Une facture vous sera remise pour votre remboursement."
                            },
                            {
                                question: "Quels moyens de paiement acceptez-vous ?",
                                answer:
                                    "Nous acceptons les paiements par carte bancaire, chèque et espèces."
                            },
                            {
                                question: "Combien de séances sont nécessaires ?",
                                answer:
                                    "Le nombre de séances varie selon plusieurs facteurs tels que le ou les motifs de consultations, l'évolution de la situation, ou encore vos besoins spécifiques... C'est en discutant ensemble que vous et votre ostéopathe pourrez déterminer le nombre et la fréquence de séances les plus adaptés à votre situation."
                            },
                            {
                                question: "Est-ce que les manipulations sont douloureuses ?",
                                answer:
                                    "Les manipulations en ostéopathie ne sont généralement pas douloureuses. Cependant certaines techniques peuvent entraîner une sensation d'inconfort ou une légère douleur passagère. Le dialogue avec votre thérapeute est essentiel pour qu'il puisse ajuster sa technique dans le but d'assurer un traitement à la fois efficace et confortable."
                            },
                            {
                                question: "Puis-je venir consulter sans ordonnance ?",
                                answer:
                                    "Oui, l'ostéopathie est une profession de première intention. Vous pouvez consulter directement, sans avoir besoin d'une prescription médicale."
                            },
                            {
                                question: "Est ce que vous faites des manipulations qui font craquer ? Est-ce possible d'éviter cela ?",
                                answer:
                                    "Oui, vos ostéopathes utilisent des techniques qui peuvent provoquer un \"craquement\", cependant ce n'est pas systématique et ce n'est pas la seule approche utilisée. Votre ostéopathe choisira les techniques qu'il juge les plus appropriées à votre situation, tout en s'assurant d'avoir votre consentement à chaque étape. Si vous préférez éviter cette sensation, il existe d'autres techniques qui ne provoquent pas de \"craquement\". N'hésitez pas à signaler tout inconfort, à n'importe quel moment, votre ostéopathe s'adaptera pour que vous soyez à l'aise pendant la séance."
                            }
                        ].map((item, index) => (
                            <details key={index} className="bg-white rounded-2xl p-6 shadow-lg group">
                                <summary className="text-lg font-display font-semibold cursor-pointer list-none">
                                    {item.question}
                                </summary>
                                <p className="mt-4 text-gray-600 text-justify">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Informations générales */}
                        <div>
                            <h3 className="text-xl font-display font-semibold mb-4">
                                Cabinet d'Ostéopathie de Morann Durand &amp; Phèdre Petelet
                            </h3>
                            <p className="text-gray-400">Votre santé entre de bonnes mains</p>
                        </div>

                        {/* Coordonnées */}
                        <div>
                            <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <MapPin size={16}/>
                                    <a
                                        href="https://www.google.com/maps/place/Ultra/@46.0505756,4.0847401,21z/data=!4m6!3m5!1s0x47f40f37f4aa8f2b:0xa4e33d9019fc01f1!8m2!3d46.0505544!4d4.0847285!16s%2Fg%2F11f03l872w?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Bâtiment L'Ultra, 164 Rue de Charlieu, 42300 Roanne
                                    </a>
                                </li>
                                <li>
                                    <span className="font-bold block">Morann Durand</span>
                                    <div className="flex items-center gap-2">
                                        <Phone size={16}/>
                                        <span>06 81 41 19 57</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail size={16}/>
                                        <span>morann.durand.osteo@gmail.com</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="font-bold block">Phèdre Petelet</span>
                                    <div className="flex items-center gap-2">
                                        <Phone size={16}/>
                                        <span>07 69 77 23 80</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail size={16}/>
                                        <span>phedre.petelet.osteo@gmail.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Prendre RDV */}
                        <div>
                            <h3 className="text-xl font-display font-semibold mb-4">Prendre RDV</h3>
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="https://user.clicrdv.com/morann-durand"
                                    className="btn btn-secondary"
                                >
                                    Prendre RDV avec Morann Durand
                                </a>
                                <a
                                    href="https://www.doctolib.fr/osteopathe/roanne/phedre-petelet-roanne"
                                    className="btn btn-primary"
                                >
                                    Prendre RDV avec Phèdre Petelet
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>© 2025 Cabinet d'Ostéopathie. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default App;
