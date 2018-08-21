package org.irmacard.ideal.web;

import org.glassfish.jersey.server.ResourceConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.SAXException;
import org.javalite.activejdbc.Base;

import javax.ws.rs.ApplicationPath;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

@ApplicationPath("/")
public class IdealApplication extends ResourceConfig {
	private static Logger logger = LoggerFactory.getLogger(IdealApplication.class);

	public IdealApplication() throws IOException, ParserConfigurationException, SAXException {
		register(GsonJerseyProvider.class);
		register(IdealResource.class);
		register(IdinResource.class);
		register(IdinExceptionMapper.class);

		logger.info("Starting IRMA iDeal server");

		openDatabase();
		closeDatabase();
	}

	public static void openDatabase() {
		if(!Base.hasConnection()) {
			// TODO: make configurable
			Base.open("org.sqlite.JDBC", "jdbc:sqlite:irma_idx.sqlite3", "", "");
		}
	}

	public static void closeDatabase() {
		Base.close();
	}
}