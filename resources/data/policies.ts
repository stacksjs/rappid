/**
 * Legal pages, verbatim.
 *
 * The text is the store's own published wording and is not edited here: a
 * redesign restyles a policy, it does not rewrite one. Each page is a list of
 * blocks so the template can set headings, paragraphs and lists properly
 * instead of dumping raw vendor HTML into the page.
 */

export interface PolicyBlock {
  kind: 'heading' | 'text' | 'list'
  value?: string
  items?: string[]
}

export interface Policy {
  slug: string
  title: string
  blocks: PolicyBlock[]
}

export const policies: Policy[] = [
  {
    slug: 'imprint',
    title: 'imprint',
    blocks: [
      {
        kind: 'heading',
        value: 'Imprint',
      },
      {
        kind: 'text',
        value: 'Angaben gemäß § 5 TMG',
      },
      {
        kind: 'text',
        value: 'rappid. UG (haftungsbeschränkt)\nEhrenfeldstraße 14,\n44789 Bochum,\nDeutschland',
      },
      {
        kind: 'text',
        value: 'Vertreten durch:\nHerr Alexander Vassilios Krenzek',
      },
      {
        kind: 'text',
        value: 'Kontakt:\nE-Mail: info@rappid.run',
      },
      {
        kind: 'text',
        value: 'Registereintrag:\nEintragung im Registergericht: Bochum\nRegisternummer: HRB 21948',
      },
      {
        kind: 'text',
        value: 'Steuernummer: 306/5863/3276',
      },
      {
        kind: 'text',
        value: 'Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE452310999',
      },
      {
        kind: 'text',
        value: 'Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, welche Sie unter https://ec.europa.eu/consumers/odr/ finden.',
      },
    ],
  },
  {
    slug: 'privacy',
    title: 'privacy policy',
    blocks: [
      {
        kind: 'text',
        value: 'Letzte Aktualisierung: 18. Mai 2025',
      },
      {
        kind: 'text',
        value: 'Diese Datenschutzrichtlinie beschreibt, wie rappid. (die „Site“, „wir“, „uns“ oder „unser“) sammelt, verwendet und gibt Ihre persönlichen Daten weiter, wenn Sie www.rappid.run (die „Site“) besuchen, unsere Dienste nutzen, einen Kauf dort tätigen oder auf andere Weise bezüglich der Site mit uns kommunizieren (zusammen die „Dienste“). Im Sinne dieser Datenschutzrichtlinie beziehen sich „Sie“ und „Ihr“ auf Sie als Benutzer der Dienste, unabhängig davon, ob Sie Kunde, Website-Besucher oder eine andere Person sind, deren Informationen wir gemäß dieser Datenschutzrichtlinie erfasst haben.',
      },
      {
        kind: 'text',
        value: 'Bitte lesen Sie diese Datenschutzrichtlinie sorgfältig durch.',
      },
      {
        kind: 'heading',
        value: 'Änderungen dieser Datenschutzrichtlinie',
      },
      {
        kind: 'text',
        value: 'Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, unter anderem, um Änderungen unserer Praktiken widerzuspiegeln, oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen. Wir werden die überarbeitete Datenschutzrichtlinie auf der Site veröffentlichen, das Datum „Zuletzt aktualisiert“ aktualisieren und alle weiteren gesetzlich erforderlichen Schritte unternehmen.',
      },
      {
        kind: 'heading',
        value: 'So erfassen und verwenden wir Ihre personenbezogenen Daten',
      },
      {
        kind: 'text',
        value: 'Um die Dienste bereitzustellen, sammeln wir persönliche Informationen über Sie aus verschiedenen Quellen und haben in den letzten 12 Monaten gesammelt, wie unten aufgeführt. Die von uns gesammelten und verwendeten Informationen variieren je nachdem, wie Sie mit uns interagieren.',
      },
      {
        kind: 'text',
        value: 'Zusätzlich zu den unten aufgeführten spezifischen Verwendungszwecken können wir die über Sie erfassten Informationen verwenden, um mit Ihnen zu kommunizieren, die Dienste bereitzustellen oder zu verbessern, alle geltenden gesetzlichen Verpflichtungen zu erfüllen, alle geltenden Servicebedingungen durchzusetzen und die Dienste, unsere Rechte und die Rechte unserer Benutzer oder anderer zu schützen oder zu verteidigen.',
      },
      {
        kind: 'heading',
        value: 'Welche persönlichen Daten sammeln wir?',
      },
      {
        kind: 'text',
        value: 'Die Art der personenbezogenen Daten, die wir über Sie erhalten, hängt davon ab, wie Sie mit unserer Site interagieren und unsere Dienste nutzen. Wenn wir den Begriff „persönliche Informationen“ verwenden, beziehen wir uns auf Informationen, die Sie identifizieren, sich auf Sie beziehen, Sie beschreiben oder mit Ihnen in Verbindung gebracht werden können. In den folgenden Abschnitten werden die Kategorien und spezifischen Arten der von uns erfassten personenbezogenen Daten beschrieben.',
      },
      {
        kind: 'heading',
        value: 'Informationen, die wir direkt von Ihnen erfassen',
      },
      {
        kind: 'text',
        value: 'Zu den Informationen, die Sie uns direkt über unsere Dienste übermitteln, können gehören:',
      },
      {
        kind: 'list',
        items: [
          'Kontaktdaten - einschließlich Ihres Namens, Ihrer Adresse, Telefonnummer und E-Mail-Adresse.',
          'Bestellinformationen - einschließlich Ihres Namens, Ihrer Rechnungsadresse, Lieferadresse, Zahlungsbestätigung, E-Mail-Adresse und Telefonnummer.',
          'Kontoinformationen - einschließlich Ihres Benutzernamens, Passworts, Sicherheitsfragen und anderer Informationen, die für die Kontosicherheit verwendet werden.',
          'Informationen zum Kundensupport - einschließlich der Informationen, die Sie in Ihre Kommunikation mit uns aufnehmen, beispielsweise wenn Sie eine Nachricht über die Dienste senden.',
        ],
      },
      {
        kind: 'text',
        value: 'Für einige Funktionen der Dienste ist es möglicherweise erforderlich, dass Sie uns bestimmte Informationen über sich selbst direkt zur Verfügung stellen. Sie können bestimmen, diese Informationen nicht bereitzustellen. Dies kann jedoch dazu führen, dass Sie diese Funktionen nicht nutzen oder nicht darauf zugreifen können.',
      },
      {
        kind: 'heading',
        value: 'Von uns erfasste Informationen über Ihre Nutzung',
      },
      {
        kind: 'text',
        value: 'Wir können auch automatisch bestimmte Informationen über Ihre Interaktion mit den Diensten erfassen („Nutzungsdaten“). Zu diesem Zweck verwenden wir möglicherweise Cookies, Pixel und ähnliche Technologien („Cookies“) Nutzungsdaten können Informationen darüber enthalten, wie Sie auf unsere Site und Ihr Konto zugreifen und diese verwenden, darunter Geräteinformationen, Browserinformationen, Informationen zu Ihrer Netzwerkverbindung, Ihre IP-Adresse und andere Informationen zu Ihrer Interaktion mit den Diensten.',
      },
      {
        kind: 'heading',
        value: 'Von Dritten erhaltene Informationen',
      },
      {
        kind: 'text',
        value: 'Schließlich können wir Informationen über Sie von Dritten erhalten, darunter von Anbietern und Dienstleistern, die in unserem Namen Informationen erfassen, beispielsweise:',
      },
      {
        kind: 'list',
        items: [
          'Unternehmen, die unsere Site und Dienste unterstützen, wie etwa Shopify.',
          'Unsere Zahlungsabwickler, die Zahlungsinformationen (z. B. Bankkonto, Kredit- oder Debitkarteninformationen, Rechnungsadresse) erfassen, um Ihre Zahlung abzuwickeln, Ihre Bestellungen auszuführen und Ihnen die von Ihnen angeforderten Produkte oder Dienstleistungen bereitzustellen, um unseren Vertrag mit Ihnen zu erfüllen.',
          'Wenn Sie unsere Site besuchen, E-Mails öffnen oder anklicken, die wir Ihnen senden, oder mit unseren Diensten oder Anzeigen interagieren, können wir oder Dritte, mit denen wir zusammenarbeiten, mithilfe von Online-Tracking-Technologien wie Pixeln, Web Beacons, Software Developer Kits, Bibliotheken von Drittanbietern und Cookies automatisch bestimmte Informationen erfassen.',
        ],
      },
      {
        kind: 'text',
        value: 'Alle Informationen, die wir von Dritten erhalten, werden gemäß dieser Datenschutzrichtlinie behandelt. Siehe auch den Abschnitt unten, Websites und Links Dritter.',
      },
      {
        kind: 'heading',
        value: 'So verwenden wir Ihre persönlichen Daten',
      },
      {
        kind: 'list',
        items: [
          'Bereitstellung von Produkten und Dienstleistungen. Wir verwenden Ihre personenbezogenen Daten, um Ihnen die Dienste bereitzustellen und unseren Vertrag mit Ihnen zu erfüllen, einschließlich der Bearbeitung Ihrer Zahlungen, der Ausführung Ihrer Bestellungen, der Zusendung von Benachrichtigungen in Bezug auf Ihr Konto, Einkäufe, Rücksendungen, Umtausch oder andere Transaktionen, der Erstellung, Pflege und sonstigen Verwaltung Ihres Kontos, der Organisation des Versands, der Erleichterung von Rücksendungen und Umtausch sowie anderer Funktionen und Funktionalitäten in Bezug auf Ihr Konto. . Wir können Ihr Einkaufserlebnis auch verbessern, indem wir Shopify ermöglichen, Ihr Konto mit anderen Shopify-Diensten abzugleichen, die Sie möglicherweise verwenden möchten. In diesem Fall verarbeitet Shopify Ihre Daten gemäß seiner Datenschutzrichtlinie und Verbraucherdatenschutzrichtlinie.',
          'Marketing und Werbung. Wir können Ihre personenbezogenen Daten für Marketing- und Werbezwecke verwenden, beispielsweise um Marketing- und Werbenachrichten per E-Mail, SMS oder Post zu versenden und Ihnen Werbung für Produkte oder Dienstleistungen anzuzeigen. Hierzu gehört gegebenenfalls die Verwendung Ihrer personenbezogenen Daten, um die Dienste und Werbung auf unserer Site und anderen Websites besser anzupassen. Wenn Sie im EWR ansässig sind, ist die Rechtsgrundlage für diese Datenverarbeitungsaktivitäten unser berechtigtes Interesse am Verkauf unserer Produkte gemäß Art. 6, Abs. 1 (f) DSGVO.',
          'Sicherheit und Betrugsprävention. Wir verwenden Ihre personenbezogenen Daten, um mögliche betrügerische, illegale oder böswillige Aktivitäten zu erkennen, zu untersuchen oder entsprechende Maßnahmen zu ergreifen. Wenn Sie sich für die Nutzung der Dienste entscheiden und ein Konto registrieren, sind Sie für die Sicherheit Ihrer Kontoanmeldeinformationen verantwortlich. Wir empfehlen Ihnen dringend, Ihren Benutzernamen, Ihr Passwort oder andere Zugangsdaten nicht an Dritte weiterzugeben. Wenn Sie glauben, dass Ihr Konto kompromittiert wurde, kontaktieren Sie uns bitte umgehend. Wenn Sie im EWR ansässig sind, ist die Rechtsgrundlage für diese Datenverarbeitungsaktivitäten unser berechtigtes Interesse, die Sicherheit unserer Website für Sie und andere Kunden zu gewährleisten, gemäß Art. 6, Abs. 1 (f) DSGVO.',
          'Kommunikation mit Ihnen und Serviceverbesserung. Wir verwenden Ihre personenbezogenen Daten, um Ihnen Kundensupport zu bieten und unsere Dienste zu verbessern. Dies liegt in unserem berechtigten Interesse, um Ihnen antworten zu können, Ihnen wirksame Dienstleistungen zu bieten und unsere Geschäftsbeziehung mit Ihnen aufrechtzuerhalten, gemäß Art. 6, Abs. 1 (f) DSGVO.',
        ],
      },
      {
        kind: 'heading',
        value: 'Cookies',
      },
      {
        kind: 'text',
        value: 'Wie viele Websites verwenden wir Cookies auf unserer Site. Spezifische Informationen zu den Cookies, die wir im Zusammenhang mit der Bereitstellung unseres Shops über Shopify verwenden, finden Sie unter https://www.shopify.com/legal/cookies. Wir verwenden Cookies, um unsere Site und unsere Dienste zu betreiben und zu verbessern (einschließlich der Speicherung Ihrer Aktionen und Präferenzen), um Analysen durchzuführen und die Benutzerinteraktion mit den Diensten besser zu verstehen (in unserem berechtigten Interesse, die Dienste zu verwalten, zu verbessern und zu optimieren). Wir können Dritten und Dienstanbietern außerdem gestatten, Cookies auf unserer Site zu verwenden, um die Dienste, Produkte und Werbung auf unserer Site und anderen Websites besser anzupassen.',
      },
      {
        kind: 'text',
        value: 'Die meisten Browser akzeptieren Cookies standardmäßig automatisch. Sie können Ihren Browser jedoch so einstellen, dass Cookies über die Browsersteuerung entfernt oder abgelehnt werden. Bitte beachten Sie, dass das Entfernen oder Blockieren von Cookies Ihre Benutzererfahrung beeinträchtigen kann und dazu führen kann, dass einige der Dienste, einschließlich bestimmter Funktionen und allgemeiner Funktionalitäten, nicht richtig funktionieren oder nicht mehr verfügbar sind. Darüber hinaus kann das Blockieren von Cookies nicht vollständig verhindern, dass wir Informationen an Dritte, beispielsweise unsere Werbepartner, weitergeben.',
      },
      {
        kind: 'text',
        value: 'Unsere Website erkennt auch das Global Privacy Control (GPC)-Signal, das es Ihnen ermöglicht, bestimmte Verwendungen oder Offenlegungen Ihrer Informationen abzulehnen. Wenn Sie uns Ihre Präferenzen über GPC mitteilen, behandeln wir ein solches Signal als gültige Anfrage zum Deaktivieren der Weitergabe/gezielten Werbung für den zugehörigen Browser oder das zugehörige Gerät. Wenn wir das Gerät, welches das Signal sendet, einem Shopify-Konto zuordnen können, wenden wir die Deaktivierungsanfrage auch auf das Konto an. Weitere Informationen zu Global Privacy Control finden Sie unter https://globalprivacycontrol.org/. Abgesehen von der Global Privacy Control erkennen wir keine anderen „Do Not Track“-Signale, die möglicherweise von Ihrem Webbrowser oder Gerät gesendet werden.',
      },
      {
        kind: 'heading',
        value: 'Wie wir personenbezogene Daten weitergeben',
      },
      {
        kind: 'text',
        value: 'Unter bestimmten Umständen können wir Ihre personenbezogenen Daten zum Zwecke der Vertragserfüllung, zu legitimen Zwecken und aus anderen Gründen, die dieser Datenschutzrichtlinie unterliegen, an Dritte weitergeben. Zu diesen Umständen können gehören:',
      },
      {
        kind: 'list',
        items: [
          'mit Anbietern oder anderen Drittparteien, die in unserem Auftrag Dienstleistungen erbringen (z. B. IT-Management, Zahlungsabwicklung, Datenanalyse, Kundensupport, Cloud-Speicher, Auftragserfüllung und Versand).',
          'mit Geschäfts- und Marketingpartnern um Ihnen Dienste bereitzustellen und Werbung für Sie zu machen. Unsere Geschäfts- und Marketingpartner verwenden Ihre Daten gemäß ihren eigenen Datenschutzrichtlinien.',
          'Wenn Sie uns anweisen, auffordern oder uns anderweitig Ihre Zustimmung zur Weitergabe bestimmter Informationen an Dritte erteilen, beispielsweise um Ihnen Produkte zuzusenden oder durch Ihre Nutzung von Social-Media-Widgets oder Login-Integrationen, und zwar mit Ihrer Zustimmung.',
          'mit unseren Tochtergesellschaften oder anderweitig innerhalb unserer Unternehmensgruppe, in unserem berechtigten Interesse, ein erfolgreiches Geschäft zu führen.',
          'Im Zusammenhang mit einer Geschäftstransaktion wie einer Fusion oder einem Konkurs, um alle geltenden gesetzlichen Verpflichtungen zu erfüllen (einschließlich der Beantwortung von Vorladungen, Durchsuchungsbefehlen und ähnlichen Anfragen), um alle geltenden Servicebedingungen durchzusetzen und um die Dienste, unsere Rechte und die Rechte unserer Benutzer oder anderer zu schützen oder zu verteidigen.',
        ],
      },
      {
        kind: 'text',
        value: 'Wir haben in den vergangenen 12 Monaten offengelegt Wir geben die folgenden Kategorien personenbezogener Daten und sensibler personenbezogener Daten über Benutzer für die oben genannten Zwecke weiter in „So erfassen und verwenden wir Ihre personenbezogenen Daten“ und „Wie wir personenbezogene Daten weitergeben“.',
      },
      {
        kind: 'list',
        items: [
          'Identifikatoren wie grundlegende Kontaktdaten und bestimmte Bestell- und Kontoinformationen',
          'Persönliche Informationskategorien, die im California Customer Records-Gesetz aufgeführt sind, z. B. grundlegende Kontaktdaten und bestimmte Bestell- und Kontoinformationen',
          'Kommerzielle Informationen wie Bestellinformationen, Einkaufsinformationen und Kundensupportinformationen',
          'Internet- oder andere ähnliche Netzwerkaktivitäten, wie etwa Nutzungsdaten',
          'Geolokalisierungsdaten, z. B. Standorte, die über eine IP-Adresse oder andere technische Hilfsmittel bestimmt werden',
        ],
      },
      {
        kind: 'list',
        items: [
          'Anbieter und Dritte, die in unserem Auftrag Dienstleistungen erbringen (wie etwa Internetdienstanbieter, Zahlungsabwickler, Fulfillment-Partner, Kundensupport-Partner und Datenanalyseanbieter)',
          'Geschäfts- und Marketingpartner',
          'Affiliates',
        ],
      },
      {
        kind: 'text',
        value: 'Ohne Ihre Zustimmung oder zum Zwecke des Rückschluss auf Ihre persönlichen Daten verwenden oder veröffentlichen wir diese nicht.',
      },
      {
        kind: 'text',
        value: 'Mit Ihrer Zustimmung geben wir personenbezogene Daten zum Zwecke der Durchführung von Werbe- und Marketingaktivitäten wie folgt weiter.',
      },
      {
        kind: 'text',
        value: 'Wir haben in den vergangenen 12 Monaten personenbezogene Daten zum Zweck der Durchführung von Werbe- und Marketingzwecken wie folgt „verkauft“ und „weitergegeben“ (wie diese Begriffe im geltenden Recht definiert sind).',
      },
      {
        kind: 'heading',
        value: 'Websites und Links Dritter.',
      },
      {
        kind: 'text',
        value: 'Unsere Site enthält möglicherweise Links zu Websites oder anderen Online-Plattformen, die von Dritten betrieben werden. Wenn Sie Links zu Websites folgen, die nicht mit uns verbunden sind oder von uns kontrolliert werden, sollten Sie deren Datenschutz- und Sicherheitsrichtlinien sowie andere Geschäftsbedingungen überprüfen. Wir übernehmen keine Garantie und Verantwortung für den Datenschutz oder die Sicherheit solcher Websites, einschließlich der Richtigkeit, Vollständigkeit oder Zuverlässigkeit der auf diesen Websites gefundenen Informationen. Informationen, die Sie an öffentlichen oder halb-öffentlichen Orten bereitstellen, einschließlich Informationen, die Sie auf Social-Networking-Plattformen Dritter teilen, können möglicherweise auch von anderen Benutzern der Dienste und/oder Benutzern dieser Plattformen Dritter eingesehen werden, ohne dass hinsichtlich der Verwendung durch uns oder Dritte eine Einschränkung besteht. Die Einbeziehung solcher Links durch uns stellt automatisch keine Billigung der Inhalte solcher Plattformen oder ihrer Eigentümer bzw. Betreiber dar, außer wie in den Diensten offengelegt.',
      },
      {
        kind: 'heading',
        value: 'Daten von Kindern',
      },
      {
        kind: 'text',
        value: 'Die Dienste sind nicht für die Nutzung durch Kinder vorgesehen, und wir erfassen wissentlich keine personenbezogenen Daten von Kindern. Wenn Sie Elternteil oder Erziehungsberechtigter eines Kindes sind, das uns seine personenbezogenen Daten übermittelt hat, können Sie uns über die unten angegebenen Kontaktdaten erreichen und die Löschung dieser Daten verlangen.',
      },
      {
        kind: 'text',
        value: 'Zum Zeitpunkt des Inkrafttretens dieser Datenschutzrichtlinie liegt uns keine tatsächliche Kenntnis darüber vor, dass wir personenbezogene Daten von Personen unter 16 Jahren „weitergeben“ oder „verkaufen“ (wie diese Begriffe im geltenden Recht definiert sind).',
      },
      {
        kind: 'heading',
        value: 'Sicherheit und Aufbewahrung Ihrer Daten',
      },
      {
        kind: 'text',
        value: 'Bitte beachten Sie, dass keine Sicherheitsmaßnahmen perfekt oder undurchdringlich sind und wir keine „perfekte Sicherheit“ garantieren können. Darüber hinaus sind die Informationen, die Sie uns senden, während der Übertragung möglicherweise nicht sicher. Wir empfehlen Ihnen, keine unsicheren Kanäle zu verwenden, um uns sensible oder vertrauliche Informationen mitzuteilen.',
      },
      {
        kind: 'text',
        value: 'Wie lange wir Ihre personenbezogenen Daten aufbewahren, hängt von verschiedenen Faktoren ab, beispielsweise davon, ob wir die Daten benötigen, um Ihr Konto zu verwalten, die Dienste bereitzustellen, gesetzlichen Verpflichtungen nachzukommen, Streitigkeiten beizulegen oder andere geltende Verträge und Richtlinien durchzusetzen.',
      },
      {
        kind: 'heading',
        value: 'Ihre Rechte',
      },
      {
        kind: 'text',
        value: 'Je nachdem, wo Sie leben, haben Sie möglicherweise einige oder alle der unten aufgeführten Rechte in Bezug auf Ihre persönlichen Daten. Allerdings sind diese Rechte nicht absolut und gelten nur unter bestimmten Umständen. In bestimmten Fällen können wir Ihre Anfrage im gesetzlich zulässigen Rahmen ablehnen.',
      },
      {
        kind: 'list',
        items: [
          'Recht auf Zugang/Information: Sie haben möglicherweise das Recht, Zugriff auf die personenbezogenen Daten zu verlangen, die wir über Sie gespeichert haben, einschließlich Einzelheiten dazu, wie wir Ihre Daten nutzen und weitergeben.',
          'Recht auf Löschung: Sie haben möglicherweise das Recht, die Löschung der von uns über Sie gespeicherten personenbezogenen Daten zu verlangen.',
          'Recht auf Berichtigung: Sie haben möglicherweise das Recht, die Korrektur unrichtiger personenbezogener Daten zu verlangen, die wir über Sie gespeichert haben.',
          'Recht auf Portabilität: Sie haben möglicherweise das Recht, eine Kopie der von uns über Sie gespeicherten personenbezogenen Daten zu erhalten und unter bestimmten Umständen und mit bestimmten Ausnahmen die Übertragung dieser Daten an Dritte zu verlangen.',
          'Recht auf Widerspruch gegen Verkauf, Weitergabe oder gezielte Werbung: Sie haben möglicherweise das Recht, uns anzuweisen, Ihre personenbezogenen Daten nicht zu „verkaufen“ oder „weiterzugeben“ oder der Verarbeitung Ihrer personenbezogenen Daten zu Zwecken zu widersprechen, die als „gezielte Werbung“ im Sinne der geltenden Datenschutzgesetze gelten. Bitte beachten Sie: Wenn Sie unsere Site mit aktiviertem Opt-out-Präferenzsignal „Global Privacy Control“ besuchen, behandeln wir dies je nach Ihrem Standort automatisch als eine Aufforderung, dem „Verkauf“ oder der „Weitergabe“ von Informationen für das Gerät und den Browser, die Sie zum Besuch der Site verwenden, zu widersprechen.',
          'Einschränkung der Verarbeitung: Sie haben möglicherweise das Recht, uns aufzufordern, die Verarbeitung Ihrer personenbezogenen Daten einzustellen oder einzuschränken.',
          'Widerruf der Einwilligung: Wenn wir zur Verarbeitung Ihrer personenbezogenen Daten auf Ihre Einwilligung angewiesen sind, haben Sie möglicherweise das Recht, diese Einwilligung zu widerrufen.',
          'Recht auf Einspruch: Wenn wir die Bearbeitung Ihres Antrags ablehnen, haben Sie möglicherweise das Recht, gegen unsere Entscheidung Berufung einzulegen. Dies können Sie durch eine direkte Antwort auf unsere Ablehnung tun.',
          'Kommunikationseinstellungen verwalten: Wir senden Ihnen unter Umständen Werbe-E-Mails und Sie können den Erhalt dieser E-Mails jederzeit ablehnen, indem Sie die in unseren E-Mails an Sie angezeigte Abmeldeoption verwenden. Wenn Sie sich abmelden, senden wir Ihnen möglicherweise noch immer E-Mails ohne Werbezweck, beispielsweise zu Ihrem Konto oder Ihren Bestellungen.',
        ],
      },
      {
        kind: 'text',
        value: 'Sie können diese Rechte wie auf unserer Site angegeben ausüben oder indem Sie uns über die unten angegebenen Kontaktdaten kontaktieren.',
      },
      {
        kind: 'text',
        value: 'Wir werden Sie nicht diskriminieren, wenn Sie eines dieser Rechte ausüben. Möglicherweise müssen wir zur Überprüfung Ihrer Identität Informationen von Ihnen erfassen, etwa Ihre E-Mail-Adresse oder Kontoinformationen, bevor wir eine inhaltliche Antwort auf die Anfrage geben können. Gemäß den geltenden Gesetzen können Sie einen autorisierten Vertreter benennen, der in Ihrem Namen Anfragen zur Ausübung Ihrer Rechte stellt. Bevor wir eine solche Anfrage eines Vertreters annehmen, müssen wir von diesem den Nachweis erbringen, dass Sie ihn bevollmächtigt haben, in Ihrem Namen zu handeln. Zudem müssen wir unter Umständen Ihre Identität direkt bei uns bestätigen. Wir werden Ihre Anfrage zeitnah beantworten, wie es das geltende Recht erfordert.',
      },
      {
        kind: 'heading',
        value: 'Beschwerden',
      },
      {
        kind: 'text',
        value: 'Wenn Sie Beschwerden über die Art und Weise haben, wie wir Ihre personenbezogenen Daten verarbeiten, kontaktieren Sie uns bitte über die unten angegebenen Kontaktdaten. Wenn Sie mit unserer Antwort auf Ihre Beschwerde nicht zufrieden sind, haben Sie je nach Ihrem Wohnort möglicherweise das Recht, gegen unsere Entscheidung Einspruch einzulegen, indem Sie uns über die unten aufgeführten Kontaktdaten kontaktieren oder Ihre Beschwerde bei Ihrer örtlichen Datenschutzbehörde einreichen. Für den EWR finden Sie eine Liste der zuständigen Datenschutzaufsichtsbehörden hier.',
      },
      {
        kind: 'heading',
        value: 'Internationale Benutzer',
      },
      {
        kind: 'text',
        value: 'Bitte beachten Sie, dass wir Ihre personenbezogenen Daten möglicherweise außerhalb des Landes übertragen, speichern und verarbeiten, in dem Sie leben. Ihre personenbezogenen Daten werden auch von Mitarbeitern und externen Dienstleistern und Partnern in diesen Ländern verarbeitet.',
      },
      {
        kind: 'text',
        value: 'Wenn wir Ihre personenbezogenen Daten in Länder außerhalb Europas übermitteln, verlassen wir uns dabei auf anerkannte Übermittlungsmechanismen wie die Standardvertragsklauseln der Europäischen Kommission oder gleichwertige Verträge der jeweils zuständigen britischen Behörde, es sei denn, die Datenübertragung erfolgt in ein Land, von dem festgestellt wurde, dass es ein angemessenes Schutzniveau bietet.',
      },
      {
        kind: 'heading',
        value: 'Kontakt',
      },
      {
        kind: 'text',
        value: 'Sollten Sie Fragen zu unseren Datenschutzpraktiken oder dieser Datenschutzrichtlinie haben oder eines der Ihnen zustehenden Rechte ausüben wollen, rufen Sie uns bitte an oder schreiben Sie uns eine E-Mail aninfo@rappid.run oder kontaktieren Sie uns unter Ehrenfeldstraße 14, Bochum, 44789, DE.',
      },
      {
        kind: 'text',
        value: 'Im Sinne der geltenden Datenschutzgesetze und sofern nicht ausdrücklich etwas anderes angegeben ist, sind wir der Verantwortliche für Ihre personenbezogenen Daten.',
      },
      {
        kind: 'text',
        value: 'Ergänzung zu dieser Datenschutzerklärung (Stand: Mai 2025)',
      },
      {
        kind: 'text',
        value: 'Einsatz von Meta Pixel (Facebook Pixel)',
      },
      {
        kind: 'text',
        value: 'Wir verwenden im Rahmen des Meta Business Managers das sog. Meta Pixel der Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland („Meta“). Mit Hilfe dieses Pixels ist es Meta möglich, Besucher unserer Website als Zielgruppe für die Darstellung von Anzeigen (sog. „Meta Ads“) zu bestimmen. Entsprechend setzen wir das Meta Pixel ein, um unsere geschalteten Anzeigen nur solchen Nutzern bei Facebook, Instagram und im Meta Audience Network anzuzeigen, die auch ein Interesse an unserem Onlineangebot gezeigt haben. Zudem können wir die Wirksamkeit der Meta-Werbeanzeigen für statistische und Marktforschungszwecke nachvollziehen, indem wir sehen, ob Nutzer nach dem Klick auf eine Anzeige auf unsere Website weitergeleitet wurden (sog. „Conversion-Tracking“).',
      },
      {
        kind: 'text',
        value: 'Die Verarbeitung Ihrer Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre Einwilligung können Sie jederzeit über die Cookie-Einstellungen auf unserer Website widerrufen.',
      },
      {
        kind: 'text',
        value: 'Die durch das Pixel erfassten Informationen werden von Meta verarbeitet, wobei es zu einer Übermittlung personenbezogener Daten in die USA kommen kann. In diesen Fällen erfolgt die Datenübermittlung auf Grundlage der von der EU-Kommission genehmigten Standardvertragsklauseln gemäß Art. 46 DSGVO. Weitere Informationen zur Datenverarbeitung durch Meta finden Sie unter: https://www.facebook.com/privacy/policy',
      },
      {
        kind: 'text',
        value: 'Einsatz von Google Ads (inkl. Conversion-Tracking und Remarketing)',
      },
      {
        kind: 'text',
        value: 'Wir nutzen Google Ads, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“), um auf externen Websites auf unsere Produkte aufmerksam zu machen. Im Rahmen dieser Werbemaßnahmen verwenden wir das sogenannte Google Ads Conversion-Tracking und Google Remarketing.',
      },
      {
        kind: 'text',
        value: 'Dabei wird auf Ihrem Endgerät ein Cookie gesetzt, sobald Sie über eine Google-Anzeige auf unsere Website gelangt sind. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Wenn der Nutzer bestimmte Seiten dieser Website besucht und das Cookie noch nicht abgelaufen ist, können Google und wir erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde.',
      },
      {
        kind: 'text',
        value: 'Durch das Google Ads Remarketing können wir Nutzern unserer Website auf Grundlage ihres Nutzungsverhaltens erneut auf anderen Seiten Werbung anzeigen lassen („retargeting“).',
      },
      {
        kind: 'text',
        value: 'Auch hier erfolgt die Verarbeitung personenbezogener Daten nur, wenn Sie im Rahmen unseres Cookie-Banners Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO erteilt haben. Diese Einwilligung kann jederzeit über die Cookie-Einstellungen auf unserer Website widerrufen werden.',
      },
      {
        kind: 'text',
        value: 'Daten können in die USA übertragen werden. Die Datenübertragung erfolgt auf Grundlage der Standardvertragsklauseln der Europäischen Kommission.',
      },
      {
        kind: 'text',
        value: 'Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy',
      },
      {
        kind: 'text',
        value: 'Cookie-Einwilligung und Opt-out',
      },
      {
        kind: 'text',
        value: 'Die Verarbeitung durch Meta Pixel und Google Ads erfolgt nur, wenn Sie über unser Cookie-Banner aktiv in die Verwendung eingewilligt haben. Ihre Einwilligung können Sie jederzeit über den Cookie-Manager auf unserer Website ändern oder widerrufen. Zudem können Sie über folgende Seiten die Erfassung und Verarbeitung Ihrer Daten deaktivieren:',
      },
      {
        kind: 'text',
        value: '• Meta (Facebook/Instagram): https://www.facebook.com/adpreferences/ad_settings',
      },
      {
        kind: 'text',
        value: '• Google: https://adssettings.google.com/authenticated',
      },
    ],
  },
  {
    slug: 'refunds',
    title: 'refund policy',
    blocks: [
      {
        kind: 'text',
        value: 'Als Verbraucher (§ 13 BGB) haben Sie das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.',
      },
      {
        kind: 'text',
        value: 'Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.',
      },
      {
        kind: 'text',
        value: 'Für Sonderanfertigungen nach Ihren individuellen Vorgaben oder eindeutig auf Ihre persönlichen Bedürfnisse zugeschnittene Produkte besteht kein Widerrufsrecht.',
      },
      {
        kind: 'heading',
        value: 'Ausübung des Widerrufsrechts',
      },
      {
        kind: 'text',
        value: 'Kunden mit Lieferadresse in Deutschland, Österreich oder der Schweiz (DACH-Region) sind verpflichtet, für die Anmeldung und Abwicklung der Rücksendung das folgende Retourenportal zu nutzen:',
      },
      {
        kind: 'text',
        value: 'https://ff662c-2a.returnsportal.online/',
      },
      {
        kind: 'text',
        value: 'Kunden außerhalb der DACH-Region müssen den Widerruf eigenständig erklären und die Rücksendung selbstständig organisieren.',
      },
      {
        kind: 'text',
        value: 'Kunden, die das Retourenportal nicht nutzen können, sind verpflichtet, sich vor der Rücksendung per E-Mail an info@rappid.run zu wenden, um die Retoure anzumelden. In diesem Fall wird ein Retourenformular zur Verfügung gestellt, welches vollständig ausgefüllt der Rücksendung beizulegen ist.',
      },
      {
        kind: 'text',
        value: 'Um Ihr Widerrufsrecht auszuüben, müssen Sie uns, der rappid. UG (haftungsbeschränkt), per E-Mail an info@rappid.run mittels einer eindeutigen Erklärung (z. B. ein per Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.',
      },
      {
        kind: 'heading',
        value: 'Widerrufsfolgen',
      },
      {
        kind: 'text',
        value: 'Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme zusätzlicher Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.',
      },
      {
        kind: 'text',
        value: 'Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.',
      },
      {
        kind: 'text',
        value: 'Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.',
      },
      {
        kind: 'heading',
        value: 'Rücksendung der Waren',
      },
      {
        kind: 'text',
        value: 'Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an folgende Adresse zurückzusenden oder zu übergeben:',
      },
      {
        kind: 'text',
        value: 'rappid. UG (haftungsbeschränkt)',
      },
      {
        kind: 'text',
        value: 'c/o Versandmanufaktur GmbH',
      },
      {
        kind: 'text',
        value: 'Sinterstraße 9',
      },
      {
        kind: 'text',
        value: '44795 Bochum',
      },
      {
        kind: 'text',
        value: 'Germany',
      },
      {
        kind: 'text',
        value: 'Für Kunden aus der DACH-Region erfolgt die Rücksendung ausschließlich über das bereitgestellte Retourenportal. Im Rahmen dieses Portals wird ein Rücksendeetikett zur Verfügung gestellt.',
      },
      {
        kind: 'text',
        value: 'Kunden außerhalb der DACH-Region sind verpflichtet, die Rücksendung eigenständig zu organisieren und an die oben genannte Adresse zu versenden.',
      },
      {
        kind: 'text',
        value: 'Kunden, die das Retourenportal nicht nutzen können, müssen das bereitgestellte Retourenformular vollständig ausgefüllt der Rücksendung beilegen.',
      },
      {
        kind: 'text',
        value: 'Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.',
      },
      {
        kind: 'heading',
        value: 'Kosten der Rücksendung',
      },
      {
        kind: 'text',
        value: 'Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.',
      },
      {
        kind: 'text',
        value: 'Im Falle von berechtigten Reklamationen, insbesondere bei defekten, beschädigten oder falsch gelieferten Artikeln, übernehmen wir die Kosten der Rücksendung.',
      },
      {
        kind: 'heading',
        value: 'Zustand der zurückgesendeten Waren',
      },
      {
        kind: 'text',
        value: 'Die Waren müssen unbenutzt, ungetragen und frei von Gebrauchsspuren sein sowie sich in der Originalverpackung in unbeschädigtem Zustand befinden.',
      },
      {
        kind: 'text',
        value: 'Ein etwaiger Wertverlust der Waren ist von Ihnen zu tragen, wenn dieser auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang zurückzuführen ist.',
      },
    ],
  },
  {
    slug: 'shipping',
    title: 'shipping policy',
    blocks: [
      {
        kind: 'heading',
        value: 'Shipping Policy',
      },
      {
        kind: 'text',
        value: 'All orders placed with rappid. UG are shipped within 3 business days after purchase. If you have any questions or encounter issues with your order, feel free to reach out to our support team via email. We are happy to assist you!',
      },
      {
        kind: 'text',
        value: 'Shipping Costs: Standard shipping is available at a flat rate of 5,49€.',
      },
      {
        kind: 'text',
        value: 'Contact Support',
      },
    ],
  },
  {
    slug: 'terms',
    title: 'terms of service',
    blocks: [
      {
        kind: 'heading',
        value: 'Allgemeine Geschäftsbedingungen (AGB) der rappid. UG (haftungsbeschränkt)',
      },
      {
        kind: 'heading',
        value: '§1 Geltungsbereich und Begriffsdefinitionen',
      },
      {
        kind: 'text',
        value: '(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen der rappid. UG (haftungsbeschränkt), Ehrenfeldstraße 14\n44789 Bochum, vertreten durch Herrn Alexander Vassilios Krenzek, und dem Kunden über den Online-Shop https://rappid.run/ abgeschlossen werden.\n(2) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).',
      },
      {
        kind: 'heading',
        value: '§2 Vertragsabschluss und Speicherung des Vertragstextes',
      },
      {
        kind: 'text',
        value: '(1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern eine unverbindliche Aufforderung zur Abgabe einer Bestellung.\n(2) Durch Anklicken des Buttons „kaufen“ im letzten Schritt des Bestellprozesses gibt der Kunde ein verbindliches Angebot zum Kauf der im Warenkorb enthaltenen Waren ab. Der Kaufvertrag kommt erst durch unsere Bestellbestätigung per E-Mail oder durch die Lieferung der Ware zustande.\n(3) Der Vertragstext wird von uns gespeichert. Die Bestelldaten und die AGB werden dem Kunden per E-Mail zugesendet. Der Kunde kann die AGB jederzeit auf der Website einsehen.',
      },
      {
        kind: 'heading',
        value: '§3 Preise und Versandkosten',
      },
      {
        kind: 'text',
        value: '(1) Die in unserem Online-Shop angegebenen Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer und sonstiger Preisbestandteile.\n(2) Zusätzlich zu den angegebenen Preisen können Versandkosten anfallen, die im Rahmen des Bestellvorgangs deutlich mitgeteilt werden.',
      },
      {
        kind: 'heading',
        value: '§4 Zahlung',
      },
      {
        kind: 'text',
        value: '(1) Der Kunde kann die Zahlung per Banküberweisung, Kreditkarte (Visa, Mastercard, American Express), PayPal, Klarna, Apple Pay oder Google Pay vornehmen.\n(2) Die Zahlung des Kaufpreises ist unmittelbar mit Vertragsschluss fällig.',
      },
      {
        kind: 'heading',
        value: '§5 Lieferung und Lieferfristen',
      },
      {
        kind: 'text',
        value: '(1) Die Lieferung erfolgt an die vom Kunden angegebene Lieferadresse.\n(2) Die Lieferfrist beträgt maximal 7 Werktage nach Vertragsschluss, es sei denn, eine abweichende Lieferzeit wurde ausdrücklich vereinbart. Fällt der letzte Tag der Frist auf einen Samstag, Sonntag oder einen gesetzlichen Feiertag, so endet die Frist am nächsten Werktag.',
      },
      {
        kind: 'heading',
        value: '§6 Eigentumsvorbehalt',
      },
      {
        kind: 'text',
        value: 'Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.',
      },
      {
        kind: 'heading',
        value: '§7 Widerrufsrecht des Verbrauchers',
      },
      {
        kind: 'text',
        value: '(1) Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen.\n(2) Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem der Kunde oder ein von ihm benannter Dritter, der nicht der Beförderer ist, die Ware in Besitz genommen hat.\n(3) Um das Widerrufsrecht auszuüben, muss der Kunde uns (rappid. UG (haftungsbeschränkt), Ehrenfeldstraße 14 44789 Bochum, E-Mail: info@rappid.run) mittels einer eindeutigen Erklärung (z.B. per E-Mail oder Post) über den Entschluss, den Vertrag zu widerrufen, informieren.',
      },
      {
        kind: 'heading',
        value: '§8 Folgen des Widerrufs',
      },
      {
        kind: 'text',
        value: '(1) Wenn der Kunde den Vertrag widerruft, erstatten wir alle erhaltenen Zahlungen, abzüglich der Lieferkosten, innerhalb von 14 Tagen nach Erhalt der Widerrufserklärung.\n(2) Die Rückzahlung erfolgt mit dem gleichen Zahlungsmittel, das der Kunde bei der ursprünglichen Transaktion verwendet hat, es sei denn, es wurde ausdrücklich etwas anderes vereinbart.\n(3) Wir können die Rückzahlung verweigern, bis wir die Waren zurückerhalten haben.\n(4) Der Kunde trägt die unmittelbaren Kosten der Rücksendung der Waren. Diese werden innerhalb Deutschlands auf maximal 9 EUR geschätzt. Bei Rücksendungen aus dem Ausland können höhere Kosten entstehen.',
      },
      {
        kind: 'heading',
        value: '§9 Gewährleistung',
      },
      {
        kind: 'text',
        value: 'Es gelten die gesetzlichen Gewährleistungsrechte.',
      },
      {
        kind: 'heading',
        value: '§10 Haftung',
      },
      {
        kind: 'text',
        value: '(1) Wir haften unbeschränkt nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen, sowie für die Verletzung von Leben, Körper oder Gesundheit.\n(2) Bei leichter Fahrlässigkeit haften wir nur für die Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in diesem Fall auf den vorhersehbaren Schaden beschränkt.',
      },
      {
        kind: 'heading',
        value: '§11 Schlussbestimmungen',
      },
      {
        kind: 'text',
        value: '(1) Auf Verträge zwischen uns und dem Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung.\n(2) Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam.',
      },
    ],
  },
]

export function policyBySlug(slug: string): Policy | undefined {
  return policies.find(p => p.slug === slug)
}
