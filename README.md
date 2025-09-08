

# 🌿 Omi Meditation App

A beautiful meditation app that helps you relax, focus, and practice mindfulness with guided sessions and affirmations.

## 🚀 Features

- **Guided Meditations**: Multiple themed meditation sessions
- **Timer with Background Audio**: Play soothing sounds during meditation
- **Affirmations**: Positive affirmations to boost your day
- **Guest Mode**: Start meditating without creating an account
- **User Authentication**: Secure signup and login
- **Responsive Design**: Works on both mobile and tablet

## 📱 Screens

1. **Welcome Screen** - Landing page with sign-in/sign-up options
2. **Authentication** - Secure login and registration
3. **Meditation Screen** - Browse and select meditation themes
4. **Meditation Player** - Timer with background audio and duration controls
5. **Affirmations** - Browse and read positive affirmations

## 🛠️ Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator / Android Emulator or physical device with Expo Go app

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/segunojo1/omi-meditation-app.git
   cd omi-meditation-app
   ```

2. **Install dependencies**
   ```bash
   npm install --force
   # or
   yarn install --force
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your Supabase URL and key:
     ```
     EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
     EXPO_PUBLIC_SUPABASE_KEY=your_supabase_key
     ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run on your device**
   - Scan the QR code with your phone's camera (iOS) or Expo Go app (Android)
   - Or press `i` for iOS Simulator or `a` for Android Emulator

## How to Use

### Getting Started
1. Open the app on your device
2. Choose to either:
   - **Sign Up** (create an account to save your progress)
   - **Sign In** (if you already have an account)
   - **Use as Guest** (start meditating immediately)

### Meditating
1. Browse through the available meditation themes
2. Select a meditation session
3. Adjust the duration if needed
4. Tap "Start Meditating"
5. The timer will start with background audio
6. Use the controls to pause or adjust the volume

### Using Affirmations
1. Navigate to the Affirmations tab
2. Browse through different categories
3. Read and reflect on positive affirmations
4. Save your favorites (when logged in)

## 🔧 Troubleshooting

- If you encounter any issues, try:
  ```bash
  npx expo start -c
  ```
  This clears the cache and restarts the development server.

- For Android emulator issues, ensure you have the required SDKs installed via Android Studio.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- Audio from [Expo AV]

---

<p align="center">
  Made with ❤️ by Segun
</p>
