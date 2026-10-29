/* Add future chapters as another object in the modules collection. */
const studyData = {
  modules: {
    module4: {
      concepts: [
        { number: '01', title: 'Frameworks & controls', text: 'Frameworks give organizations standards, guidelines, and best practices for managing cybersecurity risk. Controls are the specific safeguards, such as encryption and MFA, that put those goals into action.', tag: 'RISK MANAGEMENT', tone: 'blue' },
        { number: '02', title: 'The CIA triad', text: 'Confidentiality protects data from unauthorized access. Integrity keeps it accurate and unchanged. Availability keeps systems and data accessible when they are needed.', tag: 'FOUNDATION', tone: 'orange' },
        { number: '03', title: 'Logs & evidence', text: 'Logs record events inside an organization. Analysts use them to spot patterns and potential breaches, while evidence must be preserved in the correct order of volatility.', tag: 'INVESTIGATION', tone: 'purple' },
        { number: '04', title: 'Automation & systems', text: 'Python reduces repetitive manual work. SQL requests information from databases. Linux is an open-source operating system commonly used through its command line.', tag: 'ANALYST SKILLS', tone: 'green' }
      ],
      tools: [
        ['SIEM', 'Collects and analyzes logs from multiple sources', 'See events across an organization'],
        ['IDS', 'Monitors activity and alerts on possible intrusions', 'Detect suspicious activity'],
        ['Packet sniffer', 'Captures and analyzes network traffic', 'Inspect data moving through a network'],
        ['Playbook', 'Manual that describes operational actions', 'Make response consistent and repeatable'],
        ['Encryption', 'Converts plaintext into ciphertext', 'Protect confidentiality']
      ],
      glossary: [
        ['Antivirus software', 'Prevents, detects, and eliminates malware and viruses.'], ['Database', 'An organized collection of information or data.'], ['IDS', 'An application that monitors activity and alerts on possible intrusions.'], ['Linux', 'An open-source operating system.'], ['Log', 'A record of events that occur within an organization’s systems.'], ['Packet sniffer', 'A tool designed to capture and analyze data traffic within a network.'], ['Order of volatility', 'The sequence in which data should be preserved, from first to last.'], ['Playbook', 'A manual providing details about operational actions.'], ['Python', 'A programming language useful for automating repetitive security tasks.'], ['SIEM', 'An application that collects and analyzes log data to monitor critical activity.'], ['SQL', 'A query language used to create, interact with, and request information from a database.'], ['Vulnerability', 'A weakness that a threat actor could exploit.']
      ]
    },
    module3: {
      concepts: [
        { number: '01', title: 'Protocol categories', text: 'Communication protocols govern data exchange, management protocols monitor and manage network activity, and security protocols protect data in transit with encryption.', tag: 'NETWORK BASICS', tone: 'blue' },
        { number: '02', title: 'Know the common ports', text: 'DNS uses UDP 53, HTTP 80, HTTPS 443, SSH 22, Telnet 23, DHCP 67/68, POP3 110/995, IMAP 143/993, and SMTP 25/587.', tag: 'PORTS', tone: 'orange' },
        { number: '03', title: 'Wireless security evolves', text: 'WEP is obsolete and high risk. WPA improved it with TKIP, WPA2 uses AES and CCMP, and WPA3 adds SAE and stronger encryption.', tag: 'WI-FI SECURITY', tone: 'purple' },
        { number: '04', title: 'Firewalls and proxies', text: 'Firewalls filter traffic by rules, stateful firewalls track connections, and NGFWs add deep packet inspection and application awareness. Proxies regulate traffic between clients and servers.', tag: 'NETWORK DEFENSE', tone: 'green' },
        { number: '05', title: 'VPNs protect transit', text: 'VPNs use encapsulation to wrap data in encrypted packets and hide a public IP address. Remote access connects a user to a VPN server; site-to-site connects networks.', tag: 'PRIVATE NETWORKS', tone: 'blue' },
        { number: '06', title: 'Address and network translation', text: 'NAT maps private addresses to a public address, DHCP assigns IP configuration, and ARP maps local IP addresses to MAC addresses.', tag: 'NETWORK SERVICES', tone: 'orange' }
      ],
      tools: [
        ['DNS', 'Translates domain names into IP addresses', 'Resolve website and service names'],
        ['DHCP', 'Assigns IP addresses, DNS servers, and default gateways', 'Configure devices automatically'],
        ['SSH', 'Creates an encrypted remote connection over TCP 22', 'Administer remote systems securely'],
        ['Firewall', 'Allows or blocks traffic using security rules', 'Filter unwanted network communication'],
        ['Proxy server', 'Forwards requests between clients and other servers', 'Control access and protect internal systems'],
        ['VPN', 'Encrypts traffic through encapsulation and masks the public IP', 'Protect data on public networks'],
        ['WPA2 / WPA3', 'Wireless security protocols using modern encryption', 'Secure Wi-Fi networks']
      ],
      glossary: [
        ['Address Resolution Protocol (ARP)', 'Determines the MAC address associated with an IP address on the local network.'], ['Cloud-based firewall', 'A software firewall hosted by a cloud service provider.'], ['DHCP', 'An application-layer protocol that assigns IP addresses and network configuration to devices.'], ['Encapsulation', 'A VPN process that wraps sensitive data in other data packets.'], ['Firewall', 'A network security device that monitors and filters traffic.'], ['Forward proxy server', 'A server that regulates and restricts a client’s access to the internet.'], ['IEEE 802.11 (Wi-Fi)', 'A set of standards defining communication for wireless LANs.'], ['Network protocols', 'Rules used by network devices to describe data delivery and structure.'], ['Network segmentation', 'A security technique that divides a network into segments.'], ['Port filtering', 'A firewall function that allows or blocks selected port numbers.'], ['Proxy server', 'A server that fulfills client requests by forwarding them to other servers.'], ['Reverse proxy server', 'A server that regulates external access to internal servers.'], ['Secure File Transfer Protocol (SFTP)', 'A secure protocol for transferring files over a network.'], ['Secure shell (SSH)', 'A security protocol for creating an encrypted shell with a remote system.'], ['Security zone', 'A network segment that helps protect an internal network from the internet.'], ['Stateful firewall', 'A firewall that tracks connection information and proactively filters threats.'], ['Stateless firewall', 'A firewall that operates only from predefined rules without tracking packet state.'], ['Transmission Control Protocol (TCP)', 'A connection-oriented protocol that forms a connection and streams data.'], ['Uncontrolled zone', 'The portion of a network outside the organization.'], ['Virtual private network (VPN)', 'A service that encrypts traffic and masks a device’s public IP on a public network.'], ['Wi-Fi Protected Access (WPA)', 'A wireless security protocol for connecting devices to the internet.']
      ]
    },
    module5: {
      concepts: [
        { number: '01', title: 'Read packet captures', text: 'Network protocol analyzers capture and inspect traffic. tcpdump is a lightweight command-line tool that shows timestamps, source and destination IP addresses, ports, and protocols.', tag: 'PACKET ANALYSIS', tone: 'blue' },
        { number: '02', title: 'Recognize DoS and DDoS', text: 'DoS attacks overwhelm a network or server with traffic. DDoS attacks use multiple devices or servers in different locations, often through a botnet.', tag: 'AVAILABILITY', tone: 'orange' },
        { number: '03', title: 'Identify common floods', text: 'SYN floods overwhelm a server with simulated TCP connection requests. ICMP floods repeatedly send ICMP requests, while Ping of Death uses oversized ICMP packets.', tag: 'NETWORK ATTACKS', tone: 'purple' },
        { number: '04', title: 'Understand interception', text: 'Packet sniffing captures network traffic. Passive sniffing reads traffic, while active sniffing manipulates packets in transit. Encryption and VPNs help protect data.', tag: 'INTERCEPTION', tone: 'green' },
        { number: '05', title: 'Detect IP spoofing', text: 'IP spoofing changes a packet’s source IP to impersonate an authorized system. On-path, replay, and smurf attacks use interception or spoofing tactics.', tag: 'IMPERSONATION', tone: 'blue' },
        { number: '06', title: 'Mitigate layered threats', text: 'Firewalls, NGFW anomaly detection, encryption, traffic monitoring, scalable infrastructure, and defense in depth reduce the impact of network attacks.', tag: 'MITIGATION', tone: 'orange' }
      ],
      tools: [
        ['tcpdump', 'Command-line packet analyzer built on libpcap', 'Inspect packet routing and troubleshoot traffic'],
        ['Wireshark', 'Network protocol analyzer for capturing and inspecting traffic', 'Investigate suspicious network activity'],
        ['Botnet', 'Collection of malware-infected devices controlled by one threat actor', 'Understand distributed attack sources'],
        ['Firewall', 'Filters traffic and can block suspicious IP packets', 'Limit unauthorized or malicious traffic'],
        ['NGFW', 'Advanced firewall with deep packet inspection and anomaly detection', 'Detect unusual traffic and network attacks'],
        ['VPN', 'Encrypts data in transit to reduce packet-sniffing risk', 'Protect communications on untrusted networks']
      ],
      glossary: [
        ['Active packet sniffing', 'An attack where data packets are manipulated in transit.'], ['Botnet', 'A collection of malware-infected computers controlled by a single threat actor.'], ['Denial of service (DoS) attack', 'An attack that floods a network or server with traffic and prevents legitimate activity.'], ['Distributed denial of service (DDoS) attack', 'A DoS attack that uses devices or servers in different locations to flood a target.'], ['ICMP flood', 'A DoS attack that repeatedly sends ICMP request packets to a network server.'], ['IP spoofing', 'Changing a packet’s source IP address to impersonate an authorized system.'], ['On-path attack', 'An attack where a malicious actor intercepts or alters data between trusted parties.'], ['Packet sniffing', 'Capturing and inspecting data packets across a network.'], ['Passive packet sniffing', 'Reading network traffic without manipulating the packets.'], ['Ping of death', 'A DoS attack using an oversized ICMP packet larger than 64 KB.'], ['Replay attack', 'Intercepting a packet and delaying or repeating it later.'], ['Smurf attack', 'A spoofing and DoS attack that floods a target with ICMP packets.'], ['SYN flood attack', 'A DoS attack that floods a server with packets simulating the first TCP handshake step.']
      ],
      activities: [
        {
          title: 'Analyze network layer communication', type: 'Practice Assignment', duration: '30 min', required: '100% (1 out of 1 point)', result: 'Worked response based on the supplied scenario; no submitted grade is recorded.', tag: 'TCPDUMP ANALYSIS', tone: 'blue',
          summary: 'Analyze DNS and ICMP traffic using tcpdump and write a two-part cybersecurity incident report identifying the affected protocol, evidence, suspected cause, and next steps.',
          sections: [
            ['Scenario', 'You work for an IT services company. Customers cannot access www.yummyrecipesforme.com and receive “destination port unreachable.” You reproduce the failure and capture traffic with tcpdump. The browser attempts a DNS lookup over UDP before it can send an HTTPS request to the website. The DNS requests receive ICMP “udp port 53 unreachable” responses. The incident has been escalated to your supervisor and security engineers are handling it.'],
            ['Evidence to interpret', 'The first captured timestamp is 13:24:32.192571. Requests travel from 192.51.100.15 to 203.0.113.2.domain; responses travel in the reverse direction. DNS query ID 35084 and A? identify a request for an IPv4 address record. The + indicates recursion desired. Port 53 identifies DNS. The same delivery error appears on subsequent attempts.'],
            ['Instructions and deliverables', '1. Open the incident report template and select Use Template. 2. Open the supporting packet log and keep it available. 3. In Part 1, summarize traffic patterns, identify the protocols, cite log details, and interpret the error. 4. In Part 2, state the reporting time if known, symptoms, investigation findings, current status, suspected root cause, troubleshooting steps, and one possible solution. Save the report and a blank template, then compare your response with the course exemplar.'],
            ['Worked result — Part 1: Problem summary', 'DNS resolution failed over UDP port 53. The client 192.51.100.15 sent DNS A-record queries to 203.0.113.2. ICMP replies reported “udp port 53 unreachable,” and repeated attempts produced the same result. UDP carried the DNS queries; ICMP reported the delivery failure. Without resolving the domain, the browser could not proceed normally to the website’s HTTPS service. This evidence identifies a DNS service reachability problem, not a confirmed web-server failure.'],
            ['Worked result — Part 2: Analysis and solution', 'Customers reported the failure before the analyst reproduced it; the exact first report time is not supplied. The earliest provided capture is 13:24:32.192571. The incident remains under investigation by security engineers following escalation. A stopped or misconfigured DNS service that is not listening on UDP 53 is the suspected cause described by the scenario. Firewall rejection should also be checked; the log alone does not establish a malicious attack. Verify the DNS service status and listening socket, review DNS and firewall logs and recent changes, and confirm that the client uses the correct resolver. If the service is stopped, restore it and verify authorized UDP/TCP 53 access. Repeat the DNS query and browser test and confirm that valid answers replace the ICMP errors. Record the changes and monitor recurrence.']
          ],
          links: [
            ['Incident report template', 'https://docs.google.com/document/d/1hwjSRYalxGd-qyRIXWz8LBVuSAgEq0AHXOF_BB7DdrI/template/preview'],
            ['tcpdump supporting material', 'https://docs.google.com/document/d/17-l7_zLY9fWiS4lGemxqgbnfSe8KG_OqM_PMfZA_gp4/template/preview']
          ]
        },
        {
          title: 'Analyze network attacks', type: 'Practice Assignment', duration: '50 min', required: '100% (1 out of 1 point)', result: 'Worked response based on the supplied scenario; no submitted grade is recorded.', tag: 'INCIDENT ANALYSIS', tone: 'orange',
          summary: 'Identify the attack affecting a travel agency website and complete both sections of the cybersecurity incident report, including its effect on network performance and business operations.',
          sections: [
            ['Scenario', 'A travel agency advertises vacation packages on its website, which employees use to help customers. One afternoon, monitoring alerts you to a web-server problem and the website returns a connection timeout. A packet capture shows an unusually large number of TCP SYN requests from an unfamiliar IP address. You temporarily take the server offline to recover and configure a firewall rule blocking that source. The block is temporary because the attacker may change or spoof addresses. You must notify your manager and discuss further containment and prevention.'],
            ['Instructions and deliverables', '1. Open the report template and select Use Template. 2. Open the supporting spreadsheet and Wireshark reading. 3. Review traffic patterns and explain which attack matches the symptoms, how DoS differs from DDoS, and why the website times out. Write the attack identification in Section 1. 4. In Section 2, describe the attack’s characteristics, affected devices and activities, network performance, website behavior, and organizational consequences. Optionally propose preventive controls. Save your report and a blank template, then compare with the course exemplar.'],
            ['Worked result — Section 1: Attack identification', 'The evidence is consistent with a TCP SYN flood, a denial-of-service attack targeting the web server’s ability to accept connections. A SYN normally starts the TCP three-way handshake, followed by SYN/ACK and ACK. Excessive connection attempts can consume connection-handling resources and prevent legitimate clients from connecting. The supplied scenario identifies one unfamiliar source address; it does not establish a distributed attack. A DDoS attack uses multiple attack sources.'],
            ['Worked result — Section 2: Impact and response', 'The abnormal SYN volume overwhelmed the server and legitimate browser requests timed out. Employees could not reliably retrieve vacation packages and customers could not access promotions, potentially delaying bookings, reducing revenue, and damaging trust. The analyst temporarily removed the server from service and blocked the observed source IP. These actions are containment measures, not proof of permanent resolution. Preserve packet captures and firewall/server logs, escalate to the manager, and correlate connection rates and timestamps. Consider SYN cookies, connection-rate limits, tuned connection timeouts, and upstream DoS protection instead of relying only on one IP block. Restore service after resource use stabilizes, verify normal customer and employee access, and continue monitoring for renewed traffic.']
          ],
          links: [
            ['Incident report template', 'https://docs.google.com/document/d/1xEk_arFwlQOto7KEM6gN-sIYriXhP9-lY2ftpBXhS4M/template/preview?resourcekey=0-_ODneeo__mDgK7BTE1FkVA'],
            ['Supporting packet spreadsheet', 'https://docs.google.com/spreadsheets/d/1enpRzrIao3J2Lp2tOI0hmu1Cu7D7CjLGhFAiTiR9J64/template/preview?gid=218501934#gid=218501934'],
            ['Supporting Wireshark reading', 'https://docs.google.com/document/d/1JYyUPhfm2gwDellGRIcgItA3cZ7kz29xdYpVr1L_o9c/template/preview?usp=sharing']
          ]
        }
      ]
    },
    module6: {
      concepts: [
        { number: '01', title: 'Brute force and hardening', text: 'Brute force attacks guess credentials through trial and error. Security hardening reduces vulnerabilities and attack surface through strong authentication, patching, password policies, and secure configuration.', tag: 'OS HARDENING', tone: 'blue' },
        { number: '02', title: 'Use isolated testing', text: 'Virtual machines and sandboxes isolate suspicious code, test patches, assess vulnerabilities, and simulate incidents. They reduce risk but do not guarantee malware cannot escape.', tag: 'SAFE TESTING', tone: 'orange' },
        { number: '03', title: 'Layer network defenses', text: 'Firewalls filter traffic, IDS alerts on suspicious activity, IPS blocks or drops suspicious traffic, and SIEM centralizes logs for investigation. Together they provide defense in depth.', tag: 'DEFENSE IN DEPTH', tone: 'purple' },
        { number: '04', title: 'Secure cloud responsibility', text: 'Cloud providers secure infrastructure, while customers secure their data, identities, configurations, and processes. Misconfiguration, weak IAM, and expanding attack surfaces create risk.', tag: 'CLOUD SECURITY', tone: 'green' },
        { number: '05', title: 'Harden cloud cryptography', text: 'IAM, hypervisors, baselines, encryption, secure key management, TPMs, CloudHSM, and cryptographic erasure protect cloud resources and data.', tag: 'CLOUD HARDENING', tone: 'blue' },
        { number: '06', title: 'Use the NIST CSF', text: 'Identify risks, Protect assets, Detect suspicious activity, Respond to incidents, and Recover systems. The framework turns an incident into an improvement plan.', tag: 'NIST CSF', tone: 'orange' }
      ],
      tools: [
        ['Firewall', 'Allows or blocks traffic using packet rules', 'Filter ports and packet headers'],
        ['IDS', 'Monitors activity and alerts on possible intrusions', 'Detect known attacks and anomalies'],
        ['IPS', 'Monitors activity and actively blocks suspicious traffic', 'Stop threats inline'],
        ['SIEM', 'Collects and analyzes logs in a central dashboard', 'Investigate critical activity'],
        ['Virtual machine / sandbox', 'Runs software in an isolated testing environment', 'Assess suspicious code safely'],
        ['MFA', 'Requires two or more identity verification factors', 'Reduce credential attack risk'],
        ['CloudHSM', 'Securely stores keys and performs cryptographic operations', 'Protect cloud encryption keys']
      ],
      glossary: [
        ['Baseline configuration', 'A documented set of system specifications used as a reference for future builds, releases, and updates.'], ['Hardware', 'The physical components of a computer.'], ['Multi-factor authentication (MFA)', 'A security measure requiring identity verification in two or more ways.'], ['Network log analysis', 'Examining network logs to identify events of interest.'], ['Operating system (OS)', 'The interface between computer hardware and the user.'], ['Patch update', 'A software or operating system update that addresses security vulnerabilities.'], ['Penetration testing', 'A simulated attack used to identify vulnerabilities in systems, networks, websites, applications, and processes.'], ['Security hardening', 'Strengthening a system to reduce vulnerabilities and attack surface.'], ['Security information and event management (SIEM)', 'An application that collects and analyzes log data to monitor critical activities.'], ['World-writable file', 'A file that can be altered by anyone.'], ['Shared responsibility model', 'The cloud security model dividing responsibilities between the provider and customer.'], ['Cryptographic erasure', 'Destroying encryption keys so encrypted data becomes undecipherable.'], ['Hypervisor', 'Software or firmware that creates and manages virtual machines.'], ['Baseline', 'A fixed reference point used to compare changes in a cloud environment.']
      ],
      activities: [
        { title: 'Use the NIST cybersecurity framework to respond to a security incident', type: 'Graded Assignment', duration: '30 min', required: '80% (4.8 out of 6 points)', result: 'Worked portfolio report based on the scenario; no submitted activity grade is supplied.', summary: 'A multimedia company providing web design, graphic design, and social media marketing experienced a two-hour ICMP-flood DoS incident. Complete an incident report with a summary and the five CSF functions requested by this activity.',
          sections: [
            ['Full scenario', 'Incoming ICMP packets overwhelmed the internal network and prevented normal traffic from accessing resources. The incident team blocked incoming ICMP, stopped non-critical services, and restored critical services. Investigation found that an unconfigured firewall allowed the ICMP flood. The security team then implemented ICMP rate limiting, source IP verification, network monitoring for abnormal traffic, and IDS/IPS filtering of suspicious ICMP traffic. Use this event to plan improvements to network security.'],
            ['Instructions and required response', '1. Open the incident report analysis template and supporting materials; select Use Template. 2. Summarize the event, cause, impact, and response, including targeted systems and source information where available. 3. Identify the attack and affected systems. 4. Protect: describe immediate and future changes to systems and procedures. 5. Detect: explain how to monitor traffic, applications, identities, and unusual account activity. 6. Respond: plan containment, neutralization, evidence analysis, and improvements for future incidents. 7. Recover: prioritize information and services for restoration and document recovery processes. Save the worksheet for your portfolio and compare it with the course exemplar and rubric. The six deliverables are Summary, Identify, Protect, Detect, Respond, and Recover.'],
            ['Worked result — Summary', 'The multimedia company suffered a denial-of-service incident caused by an ICMP flood passing through an unconfigured firewall. Network resources were unavailable to legitimate internal traffic for two hours. The team blocked incoming ICMP, paused non-critical services, and restored critical operations. Subsequent controls included ICMP rate limits, source verification, network monitoring, and IDS/IPS filtering. The source identity and exact incident time are not supplied; there is no evidence here of data theft or destruction.'],
            ['Worked result — Identify', 'The attack was an ICMP-flood DoS affecting internal network availability and access to network services. The identified weakness was the firewall configuration. Inventory affected services and dependencies, establish their business criticality, and review firewall rules, network devices, systems, and access privileges. Use logs to determine the scope and traffic baseline. Assign owners to remediate the configuration gap and document the risk to ongoing client work.'],
            ['Worked result — Protect', 'Retain and test the implemented ICMP rate-limiting and source-validation rules and the IDS/IPS controls. Permit necessary diagnostic ICMP rather than leaving a blanket emergency block indefinitely. Apply least privilege, segmentation, patching, and secure configuration baselines. Require reviewed firewall changes, periodic rule audits, and staff training. Maintain tested backups and a documented escalation plan. These additional measures are recommendations, not actions already confirmed in the scenario.'],
            ['Worked result — Detect', 'Use the installed network monitoring and IDS/IPS to alert on abnormal ICMP rates, suspicious sources, packet drops, and service availability changes. Centralize firewall, IDS/IPS, server, and authentication logs for correlation. Compare traffic with normal baselines, review unauthorized access and unusual user activity, and test alert thresholds to reduce false positives while retaining timely detection.'],
            ['Worked result — Respond', 'For recurrence, validate alerts, notify the incident lead, preserve timestamped logs and packet captures, and apply approved rate limits or targeted blocks. Isolate affected segments or pause non-critical services only as needed to protect critical operations. Coordinate with the provider if traffic exceeds local capacity. Analyze packet patterns, source information, firewall changes, and service metrics. Record actions and stakeholder updates; after containment, review the cause and update procedures and controls.'],
            ['Worked result — Recover', 'Restore critical network connectivity and business services first, then reintroduce non-critical services in stages. Verify configuration integrity, normal traffic levels, access, and application functionality before declaring recovery. Restore data from verified backups only if loss or corruption is found; none is established in this scenario. Monitor for renewed flooding, communicate service restoration, and conduct a lessons-learned review with recovery exercises and updated baselines. The scenario reports two hours of disruption before resolution.'],
            ['Framework context', 'This activity uses Identify, Protect, Detect, Respond, and Recover. NIST CSF 2.0 also includes Govern; retain the five requested activity sections while using governance to assign ownership, policies, and oversight.']
          ], links: [
          ['Incident report template', 'https://docs.google.com/document/d/1EnieOKYJyKGsVff5Gg-3-dVwrHrZ2m8Hig6tVpfKqyg/template/preview?usp=sharing&resourcekey=0-eb5t-d69zTPLEGthIpVlXw'],
          ['Supporting material 1', 'https://docs.google.com/document/d/15yCDbDCOAcJw-LTz2DeCA7UeLRfvsf176T6MA6ku6ok/template/preview?usp=sharing'],
          ['Supporting material 2', 'https://docs.google.com/document/d/11eTIo1igTRFrY279DG9tHTO3tB3bugSGyknZxsvY5vI/template/preview?usp=sharing&resourcekey=0-97MA-eOwoGtqcfqky0vjmg']
        ], tag: 'PORTFOLIO ACTIVITY', tone: 'purple' }
      ]
    },
    module1: {
      concepts: [
        { number: '01', title: 'Security & risk management', text: 'Security posture is an organization’s ability to defend critical assets and data and react to change. This domain includes goals, risk mitigation, compliance, business continuity, laws, and ethics.', tag: 'DOMAIN ONE', tone: 'blue' },
        { number: '02', title: 'Asset security', text: 'Manage the storage, maintenance, retention, and destruction of physical and virtual data. Track assets, assess their impact, create backups, and plan for recovery.', tag: 'DOMAIN TWO', tone: 'orange' },
        { number: '03', title: 'Architecture & engineering', text: 'Create effective tools, systems, and processes that protect data. Important principles include shared responsibility, threat modeling, least privilege, defense in depth, fail securely, and zero trust.', tag: 'DOMAIN THREE', tone: 'purple' },
        { number: '04', title: 'Communication & network security', text: 'Secure physical networks, wireless communications, and cloud connections. Restricted network access helps protect remote, hybrid, and traveling workers.', tag: 'DOMAIN FOUR', tone: 'green' },
        { number: '05', title: 'Identity & access management', text: 'Ensure identities are trusted and authenticated and that access to physical and logical assets is authorized. Least privilege gives users only the access required for their task.', tag: 'DOMAIN FIVE', tone: 'blue' },
        { number: '06', title: 'Assessment & testing', text: 'Identify and mitigate risks, threats, and vulnerabilities through security control testing, data analysis, penetration testing, permission audits, and security audits.', tag: 'DOMAIN SIX', tone: 'orange' },
        { number: '07', title: 'Security operations', text: 'Investigate potential breaches and implement preventive measures. Operations use training, reporting, IDS, SIEM, logs, incident management, playbooks, forensics, and lessons learned.', tag: 'DOMAIN SEVEN', tone: 'purple' },
        { number: '08', title: 'Software development security', text: 'Build security into every phase of the software development lifecycle. Secure programming, testing, quality assurance, and penetration testing help prevent security from becoming an afterthought.', tag: 'DOMAIN EIGHT', tone: 'green' },
      ],
      tools: [
        ['NIST RMF', 'Prepare, categorize, select, implement, assess, authorize, and monitor', 'Manage security and privacy risk'],
        ['HITRUST', 'A widely used cybersecurity risk-management framework', 'Support organization-wide risk processes'],
        ['SIEM', 'Monitors unusual login or user activity and collects security events', 'Investigate possible unauthorized access'],
        ['Security audits', 'Review controls, permissions, and systems for risk', 'Validate that protections are working'],
        ['Backups', 'Retain copies of data so an environment can be restored', 'Recover after an incident'],
        ['Playbooks', 'Document repeatable security and response procedures', 'Guide consistent operations']
      ],
      glossary: [
        ['Assess', 'The fifth step of the NIST RMF: determine if established controls are implemented correctly.'], ['Authorize', 'The sixth RMF step: accept accountability for security and privacy risks.'], ['Business continuity', 'An organization’s ability to maintain everyday productivity by establishing risk and disaster recovery plans.'], ['Categorize', 'The second RMF step, used to develop risk-management processes and tasks.'], ['External threat', 'Anything outside the organization that has the potential to harm organizational assets.'], ['Internal threat', 'A current or former employee, vendor, or trusted partner who poses a security risk.'], ['Monitor', 'The seventh RMF step: stay aware of how systems are operating.'], ['Prepare', 'The first RMF step: complete activities needed to manage security and privacy risks before a breach.'], ['Ransomware', 'A malicious attack where threat actors encrypt an organization’s data and demand payment to restore access.'], ['Risk', 'Anything that can impact the confidentiality, integrity, or availability of an asset.'], ['Risk mitigation', 'Procedures and rules used to quickly reduce the impact of a risk, such as a breach.'], ['Security posture', 'An organization’s ability to manage its defense of critical assets and data and react to change.'], ['Select', 'The third RMF step: choose, customize, and document controls that protect an organization.'], ['Shared responsibility', 'The idea that everyone in an organization actively helps lower risk and maintain security.'], ['Social engineering', 'A manipulation technique that exploits human error to gain private information, access, or valuables.'], ['Vulnerability', 'A weakness that can be exploited by a threat.']
      ]
    },
    module2: {
      concepts: [
        { number: '01', title: 'Frameworks guide the plan', text: 'Security frameworks are guidelines for building plans that mitigate risk and threats to data and privacy. They also help organizations meet compliance requirements and security goals.', tag: 'FRAMEWORKS', tone: 'blue' },
        { number: '02', title: 'Controls reduce specific risk', text: 'Security controls are safeguards designed to reduce specific security risks. They can be physical, technical, or administrative and may prevent, detect, or correct security issues.', tag: 'CONTROLS', tone: 'orange' },
        { number: '03', title: 'NIST CSF functions', text: 'The NIST Cybersecurity Framework is voluntary and uses six core functions: Govern, Identify, Protect, Detect, Respond, and Recover.', tag: 'NIST CSF', tone: 'purple' },
        { number: '04', title: 'OWASP principles', text: 'Minimize attack surface, use least privilege, defense in depth, separation of duties, secure defaults, fail securely, do not trust services, and fix issues correctly.', tag: 'OWASP', tone: 'green' },
        { number: '05', title: 'Security audits', text: 'An audit reviews security controls, policies, and procedures against expectations. It can include scope and goals, compliance assessment, controls assessment, risk assessment, and communicating results.', tag: 'AUDITING', tone: 'blue' },
        { number: '06', title: 'CIA and identity', text: 'Confidentiality limits access to authorized users, integrity keeps data correct and reliable, and availability keeps it accessible. Authentication verifies identity; authorization grants resource access.', tag: 'FOUNDATION', tone: 'orange' }
      ],
      tools: [
        ['NIST CSF', 'Voluntary standards, guidelines, and best practices for managing cybersecurity risk', 'Organize cybersecurity activities'],
        ['CTF', 'Common language for describing and communicating cyber threat activity', 'Share and analyze threat information'],
        ['ISO/IEC 27001', 'Requirements, best practices, and controls for an information security management system', 'Manage information security risk'],
        ['Physical controls', 'Gates, locks, guards, cameras, motion detectors, and access badges', 'Protect physical spaces and assets'],
        ['Technical controls', 'Firewalls, MFA, antivirus, and other technology safeguards', 'Prevent or detect technical threats'],
        ['Administrative controls', 'Separation of duties, authorization, and asset classification', 'Manage people, process, and access'],
        ['Security audit', 'Reviews controls, policies, and procedures against expectations', 'Find gaps and improve posture']
      ],
      glossary: [
        ['Asset', 'An item perceived as having value to an organization.'], ['Attack vectors', 'The pathways attackers use to penetrate security defenses.'], ['Authentication', 'The process of verifying who someone is.'], ['Authorization', 'The concept of granting access to specific resources in a system.'], ['Availability', 'The idea that data is accessible to those authorized to access it.'], ['Biometrics', 'Unique physical characteristics used to verify a person’s identity.'], ['Confidentiality', 'The idea that only authorized users can access specific assets or data.'], ['CIA triad', 'A model that helps organizations consider risk when setting up systems and security policies.'], ['Detect', 'A NIST function for identifying potential incidents and improving monitoring.'], ['Encryption', 'The process of converting readable data into an encoded format.'], ['Govern', 'A NIST function for establishing, overseeing, and improving cybersecurity strategy, policies, roles, and risk management.'], ['Identify', 'A NIST function related to managing cybersecurity risk and its effect on people and assets.'], ['Integrity', 'The idea that data is correct, authentic, and reliable.'], ['NIST CSF', 'A voluntary framework of standards, guidelines, and best practices to manage cybersecurity risk.'], ['NIST SP 800-53', 'A unified framework for protecting information systems in the U.S. federal government.'], ['OWASP', 'A nonprofit organization focused on improving software security.'], ['Protect', 'A NIST function using policies, procedures, training, and tools to mitigate threats.'], ['Recover', 'A NIST function related to returning affected systems to normal operation.'], ['Respond', 'A NIST function for containing, neutralizing, and analyzing incidents and improving security processes.'], ['Security audit', 'A review of security controls, policies, and procedures against expectations.'], ['Security controls', 'Safeguards designed to reduce specific security risks.'], ['Security frameworks', 'Guidelines used to build plans that mitigate risk and threats to data and privacy.'], ['Security posture', 'An organization’s ability to defend critical assets and data and react to change.'], ['Threat', 'Any circumstance or event that can negatively impact assets.']
      ],
    },
  },
  questions: {
    module4: [
    { q: 'What type of tool collects and analyzes log data from multiple places?', a: 'Security information and event management (SIEM)', why: 'A SIEM centralizes log data and helps analysts identify patterns, alerts, and potential breaches.' },
    { q: 'Which part of the CIA triad protects data from unauthorized access?', a: 'Confidentiality', why: 'Confidentiality ensures private information is only available to authorized people and systems.' },
    { q: 'What does a network protocol analyzer capture?', a: 'Data traffic within a network', why: 'A packet sniffer captures and analyzes packets moving through a network.' },
    { q: 'Linux is an open-source what?', a: 'Operating system', why: 'Linux is an operating system that commonly uses a command-line interface.' },
    { q: 'What is a playbook?', a: 'A manual that provides details about operational actions', why: 'A playbook guides consistent operational work. It is not limited only to incident response.' },
    { q: 'What is a major benefit of using Python for security tasks?', a: 'Automating repetitive tasks accurately and efficiently', why: 'Automation reduces manual effort and the risk of human error.' }
    ],
    module1: [
      { q: 'Which domain focuses on access and authorization to keep data secure?', a: 'Identity and access management', why: 'IAM ensures identities are trusted and authenticated and that access is authorized.' },
      { q: 'What is the focus of security and risk management?', a: 'Define security goals and objectives, risk mitigation, compliance, business continuity, and regulations', why: 'These areas shape an organization’s security posture.' },
      { q: 'In which domain are security controls tested, data analyzed, and security audits performed?', a: 'Security assessment and testing', why: 'This domain identifies and mitigates risks, threats, and vulnerabilities.' },
      { q: 'Which domain concerns investigations and implementing preventive measures?', a: 'Security operations', why: 'Security operations investigates potential breaches and applies preventive measures.' },
      { q: 'What is a vulnerability?', a: 'A weakness that can be exploited by a threat', why: 'This was marked “Nice work” in the practice assignment.' },
      { q: 'Information protected by regulations or laws is what type of asset?', a: 'High-risk asset', why: 'A compromise could severely affect finances, operations, or reputation.' },
      { q: 'What are three key impacts of threats, risks, and vulnerabilities?', a: 'Financial damage, identity theft, and damage to reputation', why: 'These are the three answers marked “Nice work.”' },
      { q: 'What are the steps in the NIST Risk Management Framework?', a: 'Prepare, categorize, select, implement, assess, authorize, and monitor', why: 'Categorize is step two; authorize is step six.' },
      { q: 'Security _____ refers to an organization’s ability to defend critical assets and react to change.', a: 'Posture', why: 'Security posture describes the organization’s overall defensive ability.' },
      { q: 'Which are focus areas of security and risk management?', a: 'Define security goals and objectives; mitigate risk; be in compliance', why: 'These three choices were marked “Nice work.”' },
      { q: 'What is the goal of business continuity?', a: 'Maintain everyday productivity', why: 'Continuity planning helps the organization keep operating during disruption.' },
      { q: 'What concept involves everyone actively reducing risk and maintaining security?', a: 'Shared responsibility', why: 'Security is an active role for all individuals in the organization.' },
      { q: 'Which domain focuses on improving access and authorization to keep data secure?', a: 'Identity and access management', why: 'IAM manages trusted identities, authentication, and authorization.' },
      { q: 'What are key areas of security assessment and testing?', a: 'Collect and analyze data; conduct security control testing; perform security audits', why: 'All three choices were marked “Nice work.”' },
      { q: 'Security reviews can be integrated into every phase of the software development _____.', a: 'Lifecycle', why: 'Security should be included throughout the software development lifecycle.' },
      { q: 'What determines whether a risk is low, medium, or high?', a: 'The possible threat and the asset involved', why: 'The impact depends on both what could happen and what asset could be affected.' },
      { q: 'A business attack interrupts operations and causes regulatory fines. What consequence is this?', a: 'Financial', why: 'Regulatory fines are a financial consequence, even when operations are also interrupted.' },
      { q: 'Which RMF step officially approves a system and accepts responsibility for its risks?', a: 'Authorize', why: 'Authorization is the sixth RMF step.' }
    ],
    module2: [
      { q: 'How do security frameworks help mitigate risk?', a: 'They establish guidelines for building security plans.', why: 'Frameworks organize security goals and practices into a plan that helps manage risk.' },
      { q: 'Are competitor organizations the biggest threat to a company’s security?', a: 'False', why: 'The notes explain that people are the biggest threat, which is why security education is important.' },
      { q: 'Security controls are safeguards designed to reduce _____ security risks.', a: 'Specific', why: 'Controls target particular risks rather than general risks.' },
      { q: 'What control verifies who someone or something is before granting access?', a: 'Authentication', why: 'Authentication validates identity. Authorization then determines what that identity may access.' },
      { q: 'What is the NIST Cybersecurity Framework?', a: 'Voluntary standards, guidelines, and best practices for managing cybersecurity risk', why: 'The CSF is not a required business framework; organizations voluntarily use it.' },
      { q: 'What are the six NIST CSF core functions?', a: 'Govern, identify, protect, detect, respond, and recover', why: 'These functions organize an organization’s cybersecurity activities.' },
      { q: 'Which CSF function establishes a foundation by understanding assets, risks, and policies?', a: 'Identify', why: 'Identify helps an organization understand its cybersecurity risks and assets.' },
      { q: 'What does an analyst do during the CSF recover function?', a: 'Return affected systems back to normal operation', why: 'Recover restores systems and operations after an incident.' },
      { q: 'Disabling software features to reduce vulnerabilities demonstrates which OWASP principle?', a: 'Minimize the attack surface', why: 'The attack surface is all the potential vulnerabilities an attacker could exploit.' },
      { q: 'A review of controls, policies, and procedures against expectations is a security _____.', a: 'Audit', why: 'A security audit evaluates an organization’s security practices against defined expectations.' },
      { q: 'Reviewing assets and evaluating risks to ensure safeguards are effective describes what?', a: 'Controls assessment', why: 'A controls assessment reviews existing assets and risks to evaluate internal controls and processes.' },
      { q: 'What should be included when communicating internal audit results?', a: 'Audit scope and goals; risks and compliance requirements; recommendations to improve security posture', why: 'These three items were marked “Nice work.”' },
      { q: 'What is the primary purpose of a security framework?', a: 'Provide a structured guide to manage cybersecurity risk and protect data.', why: 'Frameworks provide organized guidance; they are not themselves individual technical measures.' },
      { q: 'What verifies that an employee has permission to access a resource?', a: 'Authorization', why: 'Authorization grants or denies access after identity has been verified.' },
      { q: 'Which are biometrics?', a: 'Fingerprint, palm scan, and eye scan', why: 'Biometrics use unique physical characteristics. Passwords are not biometrics.' },
      { q: 'Which CIA principle confirms that customers can access account information?', a: 'Availability', why: 'Availability means authorized users can access data when needed.' },
      { q: 'Which statements accurately describe the CSF?', a: 'Investigating incidents is part of Respond; the CSF is voluntary; Protect uses policies, procedures, training, and tools', why: 'These three choices were marked “Nice work.” The notes contain a mislabeled explanation for the first choice, but the answer identifies Respond.' },
      { q: 'Multiple permission settings that create several security points describe which OWASP principle?', a: 'Defense in depth', why: 'Defense in depth uses multiple layers of controls so an attacker must get through several protections.' },
      { q: 'What are primary objectives of an internal security audit?', a: 'Help correct compliance issues; assess controls; identify security gaps or weaknesses', why: 'These three choices were marked “Nice work.”' },
      { q: 'What involves identifying threats, risks, and vulnerabilities to decide which measures to implement?', a: 'Conducting a risk assessment', why: 'Risk assessment informs which security measures are appropriate.' },
      { q: 'Reviewing assets and evaluating potential risks during an audit describes what?', a: 'Completing a controls assessment', why: 'This evaluates whether internal safeguards and processes are effective.' },
      { q: 'What is typically communicated to stakeholders after an internal audit?', a: 'A list of existing risks; results and recommendations; a summary of the scope', why: 'These three choices were marked “Nice work.”' }
    ],
    module3: [
      { q: 'Network protocols are rules used by two or more devices to describe the _____ and structure of data.', a: 'Order of delivery', why: 'Protocols define both the order of delivery and the structure of data.' },
      { q: 'Which protocol provides secure communication between clients and web servers?', a: 'HTTPS', why: 'HTTPS secures client-to-server web communication with encryption.' },
      { q: 'What security protocol can keep information safe from malicious actors?', a: 'Secure sockets layer and transport layer security (SSL/TLS)', why: 'SSL/TLS secures HTTP transactions, producing HTTPS.' },
      { q: 'IEEE 802.11, also known as Wi-Fi, defines communication for wireless LANs.', a: 'True', why: 'IEEE 802.11 is the family of standards used for Wi-Fi communication.' },
      { q: 'What monitors and filters traffic coming in and out of a network?', a: 'Firewall', why: 'A firewall allows or denies traffic based on defined security rules.' },
      { q: 'Stateless is a firewall class that tracks information and proactively filters threats.', a: 'False', why: 'Stateful firewalls track connection information; stateless firewalls use predefined rules.' },
      { q: 'Encapsulation can be performed by a _____ to wrap sensitive data in other packets.', a: 'VPN service', why: 'VPNs use encapsulation to protect data sent across public networks.' },
      { q: 'Which zone protects highly confidential information accessible only to privileged employees?', a: 'Restricted zone', why: 'A restricted zone limits access to highly confidential information.' },
      { q: 'Which proxy regulates and restricts internet access to an internal server?', a: 'Reverse proxy server', why: 'A reverse proxy accepts external traffic, approves it, and forwards it to internal servers.' },
      { q: 'What protocol translates a website domain name into an IP address?', a: 'Domain name system (DNS)', why: 'DNS maps domain names to IP addresses.' },
      { q: 'What maintains Wi-Fi standards?', a: 'IEEE 802.11', why: 'Wi-Fi standards and protocols are based on the IEEE 802.11 family.' },
      { q: 'What firewall function blocks or allows selected port numbers?', a: 'Port filtering', why: 'Port filtering limits unwanted communication by controlling port access.' },
      { q: 'What firewall can connect to cloud-based threat intelligence and update against emerging threats?', a: 'Next generation firewall (NGFW)', why: 'NGFWs add advanced inspection and can use additional threat intelligence features.' },
      { q: 'What service masks a device’s virtual location on a public network?', a: 'Virtual private network (VPN)', why: 'A VPN encrypts traffic and masks the device’s public IP address.' },
      { q: 'VPN services perform _____ by wrapping sensitive data in other packets.', a: 'Encapsulation', why: 'Encapsulation protects data by placing it inside an encrypted packet.' },
      { q: 'What network is part of the uncontrolled zone?', a: 'Internet', why: 'The uncontrolled zone is outside the organization and includes the public internet.' },
      { q: 'Which zone includes public-facing web, proxy, and DNS servers?', a: 'Demilitarized zone (DMZ)', why: 'A DMZ hosts public-facing services while separating them from the internal network.' },
      { q: 'Which tool services client requests by forwarding them to other servers?', a: 'Proxy server', why: 'A proxy server fulfills client requests by forwarding them to other servers.' },
      { q: 'How do forward proxy servers secure internal networks?', a: 'They receive outgoing traffic, approve it, and forward it; they hide a user’s IP address and approve outgoing requests.', why: 'Forward proxies regulate outbound access and add a protective layer between internal clients and the internet.' }
    ],
    module5: [
      { q: 'What type of attack uses multiple devices or servers in different locations to flood a target network?', a: 'Distributed denial of service (DDoS) attack', why: 'A DDoS attack uses multiple devices or servers in different locations to send unwanted traffic.' },
      { q: 'What attack poses as a TCP connection and floods a server with packets simulating the first handshake step?', a: 'SYN flood attack', why: 'A SYN flood overwhelms a server with packets that simulate the first step of a TCP connection.' },
      { q: 'Which DoS attack uses an ICMP packet larger than 64 KB?', a: 'Ping of Death', why: 'Ping of Death sends an oversized ICMP packet to a system.' },
      { q: 'Which attacks send an overwhelming number of requests using communication protocols?', a: 'ICMP flood attack and SYN flood attack', why: 'Both attacks overwhelm servers with large numbers of protocol requests.' },
      { q: 'Passive packet sniffing involves manipulating data packets in transit.', a: 'False', why: 'Active packet sniffing manipulates packets; passive packet sniffing reads traffic in transit.' },
      { q: 'How can a security analyst protect against malicious packet sniffing?', a: 'Use a VPN', why: 'A VPN encrypts data as it travels across a network.' },
      { q: 'Which attack changes a packet’s source IP to impersonate an authorized system?', a: 'IP spoofing', why: 'IP spoofing changes the source IP address to impersonate an authorized system.' },
      { q: 'Which attack sniffs an authorized user’s IP address and floods it with packets?', a: 'Smurf attack', why: 'A smurf attack combines IP spoofing with a denial-of-service technique.' },
      { q: 'What do network-level DoS attacks target?', a: 'Network bandwidth', why: 'Network-level DoS attacks consume bandwidth and prevent legitimate traffic from being served.' },
      { q: 'Which statements describe DoS and DDoS attacks?', a: 'A DoS attack may flood a network with traffic; a DDoS attack is intended to overwhelm the target server; both succeed when part of the network is overloaded.', why: 'These statements were marked “Nice work” in the module challenge.' },
      { q: 'What indicates that an organization may be experiencing a SYN-flood attack?', a: 'The server stops responding after receiving an unusually high number of incoming SYN packets.', why: 'A SYN flood overwhelms a server with connection requests, causing it to stop responding.' },
      { q: 'Which DoS attack repeatedly sends ICMP packets to a network server?', a: 'ICMP flood', why: 'An ICMP flood repeatedly sends ICMP request packets to a server.' },
      { q: 'Which statements correctly describe passive and active packet sniffing?', a: 'Active sniffing may redirect packets; avoiding unprotected Wi-Fi helps protect against sniffing; passive sniffing lets attackers view traffic going in and out of a device.', why: 'These three statements were marked “Nice work” in the module challenge.' },
      { q: 'What common IP spoofing attacks should analysts know?', a: 'On-path attacks, replay attacks, and smurf attacks', why: 'These attacks are listed as common IP spoofing attacks in the module.' },
      { q: 'Which attack places a malicious actor in the middle of an authorized connection?', a: 'On-path attack', why: 'An on-path attack intercepts data in transit between trusted parties.' },
      { q: 'Which attack delays a data packet after intercepting it in transit?', a: 'Replay attack', why: 'A replay attack delays or repeats an intercepted packet later.' },
      { q: 'Which attack combines a DDoS attack with IP spoofing?', a: 'Smurf attack', why: 'A smurf attack uses a spoofed address and floods the target with ICMP traffic.' }
    ],
    module6: [
      { q: 'What acts as an intermediary between software applications and computer hardware?', a: 'Operating system', why: 'The operating system provides the interface between applications, hardware, and the user.' },
      { q: 'Which are security hardening tasks?', a: 'Making patch updates; disposing of hardware and software properly; enforcing password policies', why: 'These tasks strengthen systems and reduce vulnerabilities and attack surface.' },
      { q: 'What does MFA require?', a: 'Identity verification in at least two ways', why: 'MFA combines two or more authentication factors.' },
      { q: 'What are examples of physical security hardening?', a: 'Installing security cameras and hiring security guards', why: 'These controls secure the physical environment.' },
      { q: 'What can SIEM tools do?', a: 'Examine network logs and identify events of interest', why: 'SIEM collects and analyzes log data to monitor critical activity.' },
      { q: 'What is a basic principle of port filtering?', a: 'Allow ports used by normal network operations', why: 'Unused ports should be disallowed to reduce vulnerabilities.' },
      { q: 'What creates isolated subnets for different departments?', a: 'Network segmentation', why: 'Segmentation separates networks and limits access by role.' },
      { q: 'Should restricted-zone data use the same encryption standards as other zones?', a: 'False', why: 'Restricted zones contain highly confidential data and should use stronger encryption.' },
      { q: 'What does a cloud server baseline help prevent?', a: 'Unverified changes', why: 'Analysts compare the current cloud configuration against a known baseline.' },
      { q: 'Who is responsible for cloud network safety?', a: 'Security team, individual users, and cloud service provider', why: 'The source marks the security team and provider correct but says a correct answer was missed. Individual users also share responsibility; this completes the partial answer.' },
      { q: '_____ cloud services are a common source of security issues.', a: 'Misconfigured', why: 'Incorrect configuration can expose cloud resources and data.' },
      { q: 'What does security hardening do to the attack surface?', a: 'Diminishes the attack surface', why: 'Hardening removes or reduces vulnerabilities and unnecessary exposure.' },
      { q: 'What is a simulated attack used to identify vulnerabilities?', a: 'Penetration testing', why: 'A penetration test evaluates systems by simulating attacks.' },
      { q: 'Which OS hardening practice compares current configuration with documentation?', a: 'Checking baseline configuration', why: 'Baseline comparison detects unauthorized or unverified changes.' },
      { q: 'Which practice requires users to verify identity in two or more ways?', a: 'Multi-factor authentication (MFA)', why: 'MFA adds authentication factors beyond one credential.' },
      { q: 'What is port filtering?', a: 'A firewall function that blocks or allows certain port numbers to limit unwanted traffic', why: 'Port filtering controls which services can communicate.' },
      { q: 'What protects a restricted zone by separating it from the rest of the network?', a: 'Network segmentation', why: 'Segmentation limits access and supports stronger controls for sensitive zones.' },
      { q: 'What do regular web servers and cloud servers both require?', a: 'Proper maintenance and security hardening', why: 'Both environments need ongoing secure configuration and maintenance.' }
    ]
  }
};
