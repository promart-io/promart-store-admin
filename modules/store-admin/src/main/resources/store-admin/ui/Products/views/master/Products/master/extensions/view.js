/*
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

exports.getView = function(relativePath) {
	return {
		'id': 'Products',
		'name': 'Products',
		'label': 'Products',
		'factory': 'frame',
		'region': 'center-top',
		'type': 'master',
		'link': relativePath + 'services/v3/web/store-admin/ui/Products/views/master/Products/master/index.html'
	};
};