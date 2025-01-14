import {initializeApp} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, getDocs, query, where, collection, doc, addDoc } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyAjOKScS151ErYovNEGlUGdGToBiMgxJJs",
    authDomain: "sting-pop.firebaseapp.com",
    projectId: "sting-pop",
    storageBucket: "sting-pop.firebasestorage.app",
    messagingSenderId: "656653091682",
    appId: "1:656653091682:web:8f9d7bd92980e14511a23b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const q = query(collection(db, "guestbook-read"), where("display", "==", true));
const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
    addMessage(doc);
});

function addMessage(doc) {
    $("#content").append('<div style="display: table; margin-bottom: 1.5vh" class="sectionBox textSectionBox">\n' +
        '                    <div class="form-example">\n' +
        '                        <h2 style="padding-left: 25px; padding-top: 15px; border-radius: 25px 0 0 0;">' + doc.data()["name"] + '</h2>\n' +
        '                        <h2 style="padding-left: 10px; border-radius: 0 25px 0 0;">' + (doc.data()["site"] !== undefined ? doc.data()["site"] : ' ') + '</h2>\n' +
        '                    </div>\n' +
        '                    <p class="message">\n' +
        '                        ' + doc.data()["message"] + '\n' +
        '                    </p>\n' +
        '                </div>')
}

$("#submit").on("click", saveMessage);

export async function saveMessage() {
    let name = $("#name").val();
    let site = $("#website").val();
    let message = $("#message").val();
    console.log("The 3 values "+name+" ; "+site+" ; "+message)
    try{
        if (site !== undefined) {
            await addDoc(collection(db, "guestbook-write"), {
                name: name,
                site: site,
                message: message,
                creation: Date.now(),
                display: false
            });
        } else {
            await addDoc(collection(db, "guestbook-write"), {
                name: name,
                message: message,
                creation: Date.now(),
                display: false
            });
        }
    } catch (e) {
        alert("There was an error, try again maybe I'll have fixed it")
        return;
    }
    alert("It's sent ! I'll review it and add it to the website later !")
    $("#submit").unbind("click");
    $("#submit").prop('disabled', true);
    $("#name").prop('disabled', true);
    $("#website").prop('disabled', true);
    $("#message").prop('disabled', true);
}
