    import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';
    import SignIn from '../app/(auth)/sign-in';

    export const config = {
        endpoint: 'https://cloud.appwrite.io/v1',
        platform: 'com.jsm.aora',
        projectId: '671b3c31002f74f59618',
        databaseId: '671b3f6a000f71655b27',
        usersCollectionId: '671b403300208dd10894',
        videosCollectionId: '671b4504002ac73b4e3b',
        storageId: '671b486f00207c09910f'
    }
    // Init your React Native SDK
    const client = new Client();

    client
        .setEndpoint(config.endpoint) // Your Appwrite Endpoint
        .setProject(config.projectId) // Your project ID
        .setPlatform(config.platform) // Your application ID or bundle ID.


    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {
        try {
            console.log("Email 1:", email);

            const newAccount = await account.create(

                ID.unique(),
                email,
                password,
                username,

            );
            console.log("Email 2:", email);

            if (!newAccount) throw Error;
            const avatarUrl = new avatars.getInitials(username);

            await signIn(email, password);
            const newUser = await databases.createDocument(
                config.databaseId,
                ID.unique(),
                {
                    accountId: new Account.$id,
                    email,
                    username,
                    avatar,
                },

            )
            return newUser;

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }

    }
    export async function signIn(email, password) {

        try {
            const session = new account.createEmailToken(
                email, password
            );
            return session;

        } catch (error) {
            console.log(error);
            throw new Error(error)
        }

    }