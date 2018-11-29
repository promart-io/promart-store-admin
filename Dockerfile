# Docker descriptor for Dirigible
# License - http://www.eclipse.org/legal/epl-v10.html

ARG DIRIGIBLE_VERSION=latest
FROM dirigiblelabs/dirigible-base-platform-runtime-keycloak:$DIRIGIBLE_VERSION

COPY modules/store-admin/target/modules-store-admin-1.0.0-SNAPSHOT.jar $CATALINA_HOME/webapps/ROOT/WEB-INF/lib
COPY modules/store-admin-data/target/modules-store-admin-data-1.0.0-SNAPSHOT.jar $CATALINA_HOME/webapps/ROOT/WEB-INF/lib

EXPOSE 8080
CMD ["catalina.sh", "run"]