<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">APPMINDER_IDC2024</h1></p>
<p align="center">
	<em>Empowering apps, simplifying data, enhancing insights.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/ssm0318/AppMinder_IDC2024?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ssm0318/AppMinder_IDC2024?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ssm0318/AppMinder_IDC2024?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/ssm0318/AppMinder_IDC2024?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

AppMinderIDC2024 is a cutting-edge project designed to enhance user engagement and data processing efficiency in Android apps. By seamlessly managing build configurations, tracking app usage statistics, and processing notifications, it offers developers a comprehensive solution for optimizing user experiences. Ideal for developers seeking streamlined app development and robust data insights.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| 📄 | **Documentation** | <ul><li>primary_language='Kotlin'</li><li>language_counts={'gradle': 3, 'bat': 1, 'ipynb': 6, 'py': 3, 'pro': 1, 'kt': 41}</li><li>package_managers={'gradle': 'Android App/build.gradle, Android App/app/build.gradle'}</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| 🧪 | **Testing**       | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| 🛡️ | **Security**      | <ul><li>Fact 1</li><li>Fact 2</li><li>Fact 3</li></ul> |
| 📦 | **Dependencies**  | <ul><li>['gradle', 'python', 'proguard-rules.pro', 'build.gradle', 'gradlew.bat', 'jupyternotebook', 'kotlin', 'settings.gradle']</li></ul> |

---

##  Project Structure

```sh
└── AppMinder_IDC2024/
    ├── Android App
    │   ├── .gitignore
    │   ├── .gitignore.swp
    │   ├── README.md
    │   ├── app
    │   ├── build.gradle
    │   ├── gradle
    │   ├── gradle.properties
    │   ├── gradlew
    │   ├── gradlew.bat
    │   └── settings.gradle
    ├── Data Processing
    │   ├── .DS_Store
    │   ├── .gitignore
    │   ├── .ipynb_checkpoints
    │   ├── EMA Response Parsing.ipynb
    │   ├── README.md
    │   ├── Sanity Check - Notifications.ipynb
    │   ├── Sanity Check - Usage Stats.ipynb
    │   ├── __pycache__
    │   ├── data
    │   ├── notifications_processing.py
    │   ├── usage_stats_processing.py
    │   └── utils.py
    └── README.md
```


###  Project Index
<details open>
	<summary><b><code>APPMINDER_IDC2024/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- Android App Submodule -->
		<summary><b>Android App</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/build.gradle'>build.gradle</a></b></td>
				<td>- Manages top-level build configurations for all sub-projects/modules in the Android app<br>- Sets up essential dependencies like Kotlin, Firebase Crashlytics, and Google Services<br>- Centralizes repository declarations for easy access across the project<br>- Cleans the build directory with a defined task.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/gradlew.bat'>gradlew.bat</a></b></td>
				<td>- Initiate Gradle build process for the Android app by setting up JVM options and executing Gradle with necessary configurations<br>- Ensure Java is correctly located and JAVA_HOME is set<br>- Handle command-line arguments and classpath setup for Gradle wrapper<br>- This script is crucial for building the Android app within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/settings.gradle'>settings.gradle</a></b></td>
				<td>Defines the project name and includes the app module in the Android project structure.</td>
			</tr>
			</table>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/proguard-rules.pro'>proguard-rules.pro</a></b></td>
						<td>- Specifies ProGuard rules for the Android app to optimize and obfuscate code during the build process<br>- Helps in reducing the app size and enhancing security by removing unused code and renaming classes, methods, and fields<br>- Enables developers to configure specific rules for code optimization and protection.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/build.gradle'>build.gradle</a></b></td>
						<td>- Configure Android app build settings and dependencies for Firebase services, location sensor, notifications, JSON serialization, Realtime database, and WorkManager<br>- This file defines the project's essential configurations and integrations, ensuring smooth functionality and performance across various features.</td>
					</tr>
					</table>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<details>
								<summary><b>androidTest</b></summary>
								<blockquote>
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<details>
												<summary><b>com</b></summary>
												<blockquote>
													<details>
														<summary><b>example</b></summary>
														<blockquote>
															<details>
																<summary><b>drg2023</b></summary>
																<blockquote>
																	<table>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/androidTest/java/com/example/drg2023/ExampleInstrumentedTest.kt'>ExampleInstrumentedTest.kt</a></b></td>
																		<td>- Verifies the Android app's context by running an instrumented test on a device<br>- The test ensures the correct package name is associated with the app under examination<br>- This file plays a crucial role in validating the app's behavior on Android devices within the project's testing framework.</td>
																	</tr>
																	</table>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>test</b></summary>
								<blockquote>
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<details>
												<summary><b>com</b></summary>
												<blockquote>
													<details>
														<summary><b>example</b></summary>
														<blockquote>
															<details>
																<summary><b>drg2023</b></summary>
																<blockquote>
																	<table>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/test/java/com/example/drg2023/ExampleUnitTest.kt'>ExampleUnitTest.kt</a></b></td>
																		<td>Verify correctness of addition operation in the ExampleUnitTest class for the Android app.</td>
																	</tr>
																	</table>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>main</b></summary>
								<blockquote>
									<details>
										<summary><b>java</b></summary>
										<blockquote>
											<details>
												<summary><b>com</b></summary>
												<blockquote>
													<details>
														<summary><b>example</b></summary>
														<blockquote>
															<details>
																<summary><b>drg2023</b></summary>
																<blockquote>
																	<table>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/NotificationService.kt'>NotificationService.kt</a></b></td>
																		<td>Implements a NotificationService that schedules daily notifications at 8:30 pm using an AlarmManager in the Android app.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/MainActivity.kt'>MainActivity.kt</a></b></td>
																		<td>- The `MainActivity.kt` file in the provided codebase is crucial for managing the main activity of the Android application<br>- It handles various functionalities such as permissions, UI interactions, navigation drawer setup, and database interactions<br>- This file plays a key role in orchestrating the user interface and behavior of the main screen of the application, ensuring a smooth user experience.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/ApiManager.kt'>ApiManager.kt</a></b></td>
																		<td>- Manages real-time data uploads and deletions, and writes data to JSON files<br>- Utilizes Firebase for database operations and Gson for serialization<br>- Implements retry logic for failed uploads<br>- Ensures synchronized file access for data integrity<br>- Supports debugging with delete functionality in development mode<br>- Overall, facilitates seamless data management and synchronization within the app.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/UploadWholeWorker.kt'>UploadWholeWorker.kt</a></b></td>
																		<td>- Handles real-time data uploads for multiple trackers in the Android app, ensuring seamless synchronization with the server<br>- Initiates data transmission for both regular and one-time trackers, logging progress for each operation<br>- In case of any errors, gracefully handles exceptions to prevent disruptions in data flow.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/Utils.kt'>Utils.kt</a></b></td>
																		<td>- Provides utility functions for generating Unix timestamps, date keys, date-time keys, and SHA-256 hashes<br>- These functions facilitate time-related calculations and data encryption within the project's architecture.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/TrackerService.kt'>TrackerService.kt</a></b></td>
																		<td>- Manages tracking services, including notifications, app usage, and system events<br>- Initiates background tasks for data collection and periodic uploads to the server<br>- Ensures continuous monitoring and logging of various sensor data<br>- Implements worker tasks for saving data locally and on the server at specified intervals<br>- Overall, orchestrates the core functionality of the tracking system within the app architecture.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/AppTrackWorker.kt'>AppTrackWorker.kt</a></b></td>
																		<td>- Initiates tracking of app usage, network stats, and usage events in the Android app<br>- Utilizes various trackers to collect data for analysis and monitoring purposes<br>- Integrates with the overall project architecture to provide insights into user behavior and app performance.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/FloatingButtonService.kt'>FloatingButtonService.kt</a></b></td>
																		<td>- Implements a floating button service in the Android app to display a main button and sub-buttons with different emotions<br>- The service manages button interactions, animations, and positioning on the screen<br>- It enhances user engagement by providing quick access to app functionalities based on selected emotions.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/FileSaveWorker.kt'>FileSaveWorker.kt</a></b></td>
																		<td>- Handles saving data from multiple trackers in JSON format using a Worker in the Android app<br>- Retrieves a unique timestamp key and writes data for each tracker to the API<br>- Handles exceptions and returns success or failure accordingly.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/AppUsageMonitorService.kt'>AppUsageMonitorService.kt</a></b></td>
																		<td>- Monitors app usage, sends notifications based on predefined criteria, and manages foreground services<br>- Implements a service to track app usage stats, handle notifications, and ensure continuous monitoring<br>- Utilizes system services and Firebase for data storage<br>- Maintains notification limits and intervals for user engagement.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/NotificationReceiver.kt'>NotificationReceiver.kt</a></b></td>
																		<td>- Generates and displays a notification to remind users to perform a daily review<br>- The notification includes a link that opens a specific website when clicked<br>- This functionality is encapsulated within the NotificationReceiver.kt file, contributing to the app's user engagement and interaction features.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/BootBroadcastReceiver.kt'>BootBroadcastReceiver.kt</a></b></td>
																		<td>Handles boot events by adding a sensor model and starting background services.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/DialogActivity.kt'>DialogActivity.kt</a></b></td>
																		<td>- Initiates a dialog prompting users to open AppMinder and complete a survey<br>- Displays options to either open the app or dismiss the dialog<br>- Upon selection, navigates users accordingly within the Android app<br>- This functionality enhances user engagement and encourages survey participation within the application.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/ApiService.kt'>ApiService.kt</a></b></td>
																		<td>Defines an interface for API communication in the Android app, facilitating data exchange with the server.</td>
																	</tr>
																	<tr>
																		<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/PopUpActivity.kt'>PopUpActivity.kt</a></b></td>
																		<td>- Initiates a pop-up dialog prompting users to open the main app activity or dismiss it<br>- The dialog enforces user interaction by providing options to proceed or cancel, ensuring a seamless flow within the app<br>- This component enhances user engagement and guides them through the app's functionalities effectively.</td>
																	</tr>
																	</table>
																	<details>
																		<summary><b>tracker</b></summary>
																		<blockquote>
																			<table>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/Tracker.kt'>Tracker.kt</a></b></td>
																				<td>Implements a Tracker class that logs start and stop events with timestamps using Utils.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/NotificationListener.kt'>NotificationListener.kt</a></b></td>
																				<td>- Handles notification events by capturing and processing notifications in the Android app<br>- Tracks active notifications, their order, and ranking<br>- Adds notifications to a list when posted or removed, including relevant details like timestamp, key, package name, and reason for removal.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/UsageStatsTracker.kt'>UsageStatsTracker.kt</a></b></td>
																				<td>- Tracks and records app usage statistics over a specified number of days using the UsageStatsManager<br>- Data is collected daily and stored with timestamps for analysis<br>- This component integrates with the project's API manager to write the collected data in JSON format.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/ShutDownTracker.kt'>ShutDownTracker.kt</a></b></td>
																				<td>- Implements a shutdown tracker in the Android app to monitor device shutdown events<br>- Registers a broadcast receiver to capture shutdown signals and perform necessary actions, such as logging data and uploading it to a server<br>- Enhances the app's tracking capabilities by recording shutdown events and handling data processing tasks efficiently.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/NetworkStatsTracker.kt'>NetworkStatsTracker.kt</a></b></td>
																				<td>- NetworkStatsTracker class in the provided file fetches and logs network usage stats for mobile and Wi-Fi networks hourly<br>- It utilizes Android's NetworkStatsManager to query and process network data, storing it in a structured format for further analysis<br>- This class plays a crucial role in monitoring network usage within the app's sensor tracking functionality.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/InstalledAppTracker.kt'>InstalledAppTracker.kt</a></b></td>
																				<td>- The `InstalledAppTracker` class in the provided code file retrieves and logs information about installed applications on an Android device<br>- It leverages the device's PackageManager to gather data on installed apps, such as package name and UID<br>- This functionality contributes to the project's sensor tracking capabilities, enhancing the overall data collection process.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/PowerTracker.kt'>PowerTracker.kt</a></b></td>
																				<td>- The PowerTracker code file manages power-related events in the Android app, tracking battery status changes and docking events<br>- It utilizes a BroadcastReceiver to handle different power-related actions and updates the PowerListAdapter with relevant power data<br>- This component plays a crucial role in monitoring and reacting to power-related events within the app architecture.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/PackageTracker.kt'>PackageTracker.kt</a></b></td>
																				<td>- The `PackageTracker` class in the provided code file manages package tracking functionality within the Android app<br>- It registers a `PackageReceiver` to listen for package-related events like installation, uninstallation, and updates<br>- This component plays a crucial role in monitoring and responding to changes in the app's package ecosystem.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/UsageEventTracker.kt'>UsageEventTracker.kt</a></b></td>
																				<td>- Implements a UsageEventTracker class that tracks usage events in the Android app<br>- It queries and processes usage events using the UsageStatsManager, populating a list with UsageStatsEventModel objects<br>- The class starts and stops event tracking, logging the size of the event queue upon stopping.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/TrackerInterface.kt'>TrackerInterface.kt</a></b></td>
																				<td>Define a TrackerInterface for starting and stopping tracking in the project.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/NotificationRankingTracker.kt'>NotificationRankingTracker.kt</a></b></td>
																				<td>- The NotificationRankingTracker class in the provided code file manages the tracking of notification rankings in the Android app<br>- It interacts with the NotificationListenerService to collect and store ranking data for notifications<br>- This functionality contributes to the app's sensor model by updating the NotificationRankingListAdapter with the latest ranking information.</td>
																			</tr>
																			<tr>
																				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/tracker/MonthlyUsageStatsTracker.kt'>MonthlyUsageStatsTracker.kt</a></b></td>
																				<td>- Generates monthly usage statistics for the app by querying usage data for specified months and storing it using an API manager<br>- The code ensures positive input for the number of months and utilizes the UsageStatsManager to gather data<br>- This tracker contributes vital insights into user behavior and app performance over time.</td>
																			</tr>
																			</table>
																		</blockquote>
																	</details>
																	<details>
																		<summary><b>model</b></summary>
																		<blockquote>
																			<details>
																				<summary><b>sensors</b></summary>
																				<blockquote>
																					<table>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/UsageStatsModel.kt'>UsageStatsModel.kt</a></b></td>
																						<td>- Implements a model for tracking app usage statistics, including package name, timestamps, and total time in the foreground<br>- Provides a method to generate a unique key for comparison<br>- Includes a list adapter to manage and add usage stats models efficiently.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/PackageModel.kt'>PackageModel.kt</a></b></td>
																						<td>- Defines a data model for packages in the Android app, including package name, type, and action<br>- Implements a model adapter interface for managing package data in a queue.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/BootModel.kt'>BootModel.kt</a></b></td>
																						<td>- Defines a BootModel data class and BootListAdapter object that manage boot-related sensor data in the project's architecture<br>- The BootModel class encapsulates time and on/off status, while the BootListAdapter object handles the queue and model interface for BootModel instances.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/NetworkStatsModel.kt'>NetworkStatsModel.kt</a></b></td>
																						<td>- Defines a data model for network statistics, capturing various network-related metrics<br>- Implements interfaces for model and adapter, facilitating data manipulation and display within the app.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/PowerModel.kt'>PowerModel.kt</a></b></td>
																						<td>- Defines a PowerModel data structure with charged and docked properties, ensuring both are present<br>- Includes Charged and Docked data classes<br>- Implements ModelInterface<br>- PowerListAdapter manages a queue of PowerModel instances.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/NotificationModel.kt'>NotificationModel.kt</a></b></td>
																						<td>- Defines a data model for notifications with specific attributes and behaviors<br>- It encapsulates notification details and provides a structured format for handling notifications within the application<br>- The model also includes predefined constants for different notification types.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/ServiceTurnoffModel.kt'>ServiceTurnoffModel.kt</a></b></td>
																						<td>- Defines a model and adapter for managing service turnoff data in the sensors module<br>- The ServiceTurnoffModel encapsulates time information, while the ServiceTurnoffListAdapter provides functionality to interact with a queue of ServiceTurnoffModel instances<br>- This code contributes to organizing and handling sensor-related data within the project architecture.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/UsageEventModel.kt'>UsageEventModel.kt</a></b></td>
																						<td>- Defines a data model for usage statistics events and their configurations<br>- Implements an adapter for managing instances of the model.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/InstalledAppModel.kt'>InstalledAppModel.kt</a></b></td>
																						<td>- Defines a data model and adapter for installed apps, managing time, package name, and UID<br>- The model implements an interface for data consistency, while the adapter handles data queueing and model class references.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/ModelAdapterInterface.kt'>ModelAdapterInterface.kt</a></b></td>
																						<td>Defines interfaces for models and model adapters to handle data conversion to JSON and HashMap formats, enabling easy manipulation and serialization of sensor data within the project's architecture.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/NotificationRankingModel.kt'>NotificationRankingModel.kt</a></b></td>
																						<td>- Defines a data structure for ranking notifications based on key, rank, and user sentiment<br>- Implements a model for managing notification rankings, allowing addition of new rankings to a list<br>- Provides an adapter for handling NotificationRankingModel instances in a queue-based system.</td>
																					</tr>
																					<tr>
																						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Android App/app/src/main/java/com/example/drg2023/model/sensors/MonthlyUsageStatsModel.kt'>MonthlyUsageStatsModel.kt</a></b></td>
																						<td>- Defines a model for monthly usage statistics and provides a list adapter for managing these models<br>- The model captures essential data points related to app usage, while the adapter facilitates adding new usage stats to a queue, ensuring uniqueness based on specific criteria.</td>
																					</tr>
																					</table>
																				</blockquote>
																			</details>
																		</blockquote>
																	</details>
																</blockquote>
															</details>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- Data Processing Submodule -->
		<summary><b>Data Processing</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/Sanity Check - Usage Stats.ipynb'>Sanity Check - Usage Stats.ipynb</a></b></td>
				<td>Generates usage statistics for specified apps, processes and filters data, maps app names, and exports processed data to a CSV file.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/EMA Response Parsing.ipynb'>EMA Response Parsing.ipynb</a></b></td>
				<td>- Parse EMA responses from a JSON file, extract relevant data, and structure it into a DataFrame for further analysis<br>- Validate UUIDs, manipulate date formats, and filter entries for the current day<br>- Finally, identify individuals without responses and output the results.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/notifications_processing.py'>notifications_processing.py</a></b></td>
				<td>- The code file `notifications_processing.py` parses and processes notification data for different models and users<br>- It translates notification types and cancel reasons, creating a structured DataFrame for analysis<br>- By leveraging multiprocessing, it efficiently handles large datasets, contributing to the project's data processing capabilities.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/utils.py'>utils.py</a></b></td>
				<td>- Enables mapping UUIDs to package IDs and retrieving package names from a JSON file<br>- The code defines a dictionary for UUID to ID mapping, lists of UUIDs and IDs, and functions for UUID to ID conversion and fetching package names based on UUIDs from a JSON file.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/usage_stats_processing.py'>usage_stats_processing.py</a></b></td>
				<td>- The code file processes and parses data instances for user usage statistics, organizing them into a structured DataFrame<br>- It handles data extraction, transformation, and aggregation for specific users and models, contributing to the overall data processing pipeline within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/Sanity Check - Notifications.ipynb'>Sanity Check - Notifications.ipynb</a></b></td>
				<td>- Generates a processed CSV file containing notifications data for specific apps<br>- Maps package names to app names, sorts data, and removes unnecessary columns<br>- The file aims to streamline notification data analysis by organizing and preparing it for further processing.</td>
			</tr>
			</table>
			<details>
				<summary><b>.ipynb_checkpoints</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/.ipynb_checkpoints/Sanity Check - Usage Stats-checkpoint.ipynb'>Sanity Check - Usage Stats-checkpoint.ipynb</a></b></td>
						<td>Process and transform usage statistics data, filtering for specific apps, mapping app names, and generating a processed CSV file.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/.ipynb_checkpoints/EMA Response Parsing-checkpoint.ipynb'>EMA Response Parsing-checkpoint.ipynb</a></b></td>
						<td>- Parse EMA responses from a JSON file, creating a structured DataFrame with relevant data<br>- Filter and process entries for the current day, identifying individuals without responses<br>- Output the processed data to a CSV file named with the current date.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/ssm0318/AppMinder_IDC2024/blob/master/Data Processing/.ipynb_checkpoints/Sanity Check - Notifications-checkpoint.ipynb'>Sanity Check - Notifications-checkpoint.ipynb</a></b></td>
						<td>- Transforms raw notification data into a processed CSV file for specific apps, mapping package names to app names<br>- Drops unnecessary columns and sorts data by ID and date<br>- The resulting file is saved as 'notifications_processed.csv'.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with AppMinder_IDC2024, ensure your runtime environment meets the following requirements:

- **Programming Language:** Kotlin
- **Package Manager:** Gradle


###  Installation

Install AppMinder_IDC2024 using one of the following methods:

**Build from source:**

1. Clone the AppMinder_IDC2024 repository:
```sh
❯ git clone https://github.com/ssm0318/AppMinder_IDC2024
```

2. Navigate to the project directory:
```sh
❯ cd AppMinder_IDC2024
```

3. Install the project dependencies:


**Using `gradle`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Kotlin-0095D5.svg?style={badge_style}&logo=kotlin&logoColor=white" />](https://kotlinlang.org/)

```sh
❯ gradle build
```




###  Usage
Run AppMinder_IDC2024 using the following command:
**Using `gradle`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Kotlin-0095D5.svg?style={badge_style}&logo=kotlin&logoColor=white" />](https://kotlinlang.org/)

```sh
❯ gradle run
```


###  Testing
Run the test suite using the following command:
**Using `gradle`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Kotlin-0095D5.svg?style={badge_style}&logo=kotlin&logoColor=white" />](https://kotlinlang.org/)

```sh
❯ gradle test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/ssm0318/AppMinder_IDC2024/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/ssm0318/AppMinder_IDC2024/issues)**: Submit bugs found or log feature requests for the `AppMinder_IDC2024` project.
- **💡 [Submit Pull Requests](https://github.com/ssm0318/AppMinder_IDC2024/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/ssm0318/AppMinder_IDC2024
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/ssm0318/AppMinder_IDC2024/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=ssm0318/AppMinder_IDC2024">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
