package org.irmacard.idin.web;

import org.glassfish.jersey.server.ResourceConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.SAXException;

import javax.ws.rs.ApplicationPath;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

@ApplicationPath("/")
public class IdinApplication extends ResourceConfig {
	private static Logger logger = LoggerFactory.getLogger(IdinApplication.class);

	public IdinApplication() throws IOException, ParserConfigurationException, SAXException {
		register(GsonJerseyProvider.class);
		register(IdinResource.class);
		register(IdinExceptionMapper.class);

		logger.info("Starting IRMA iDIN server");

	}



}